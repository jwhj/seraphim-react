const level = require('level')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const engine = require('./engine')
const uuid = require('uuid')
const engines = {}
tmp = null
const jsonParser = bodyParser.json()
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'POST, GET')
	res.header('Access-Control-Allow-Headers', 'X-Requested-With')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	next()
})
app.use(jsonParser)
const dbs = {}
function getDb(s) {
	if (!(s in dbs)) {
		dbs[s] = level(s)
	}
	return dbs[s]
}
engine.prototype.getDb = function () {
	return getDb(`./games/${this.name}/db`)
}
app.post('/edit/get', async (req, res) => {
	const db = getDb(`./games/${req.body.name}/db`)
	res.send(await db.get(req.body.id))
})
app.post('/edit/set', (req, res) => {
	const db = getDb(`./games/${req.body.name}/db`)
	db.put(req.body.id, req.body.ctx).then(() => {
		res.send('ok')
	}).catch(err => {
		res.send(err)
	})
})
app.post('/edit/list', (req, res) => {
	const db = getDb(`./games/${req.body.name}/db`)
	const ans = []
	db.createKeyStream().on('data', data => {
		ans.push(data)
	}).on('end', () => {
		res.send(ans)
	})
})
const name = 'test'
async function getEngine(eid) {
	if (!eid) return tmp
	if (!(eid in engines)) {
		const db = getDb('./save')
		engines[eid] = JSON.parse(await db.get(eid))
		engines[eid].__proto__ = engine.prototype
	}
	return engines[eid]
}
app.post('/game/new', (req, res) => {
	if (req.body.save) {
		const e = JSON.parse(req.body.save)
		e.__proto__ = engine.prototype
		tmp = engines[e.eid] = e
		res.send({ name: e.name, eid: e.eid })
	}
	else {
		const id = uuid()
		tmp = engines[id] = new engine(id, req.body.name || name)
		res.send({ name: req.body.name || name, eid: id })
	}
})
app.post('/game/answer', async (req, res) => {
	const e = await getEngine(req.body.eid)
	e.ans[req.body.qid] = req.body.ans
	e.state.qry = null
	e.state.opt = null
	res.send('ok')
})
app.post('/game/getstate', async (req, res) => {
	const e = await getEngine(req.body.eid)
	res.send(e.state)
})
app.post('/game/next', async (req, res) => {
	const e = await getEngine(req.body.eid)
	res.send(await e.next())
})
app.post('/game/save', async (req, res) => {
	const e = await getEngine(req.body.eid)
	const db = getDb('./save')
	await db.put(e.eid, JSON.stringify(e))
	res.send('ok')
})
app.post('/game/getsave', async (req, res) => {
	const e = await getEngine(req.body.eid)
	res.send(e)
})
app.get('/res/:name/:file', (req, res) => {
	res.sendFile(__dirname + `/games/${req.params.name}/res/${req.params.file}`)
})
app.listen(8080)