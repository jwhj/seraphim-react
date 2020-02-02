import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import send from 'koa-send'
import levelup from 'levelup'
import leveldown from 'leveldown'
import os from 'os'
const level = (s: string) => levelup(leveldown(s))
const db: Map<string, ReturnType<typeof level>> = new Map()
const app = new Router()
app.use(bodyParser())
export default app
const gamesDir = `${os.homedir()}/.seraphim/games`
const getDb = (s: string) => {
	if (!db.has(s)) db.set(s, level(`${gamesDir}/${s}/db`))
	return db.get(s)
}
app.post('/api/lst', async ctx => {
	const s = getDb(ctx.request.body.gameName).createKeyStream()
	ctx.body = await new Promise((res, rej) => {
		const lst = []
		s.on('data', d => lst.push(d.toString()))
		s.on('end', () => res(lst))
	})
})
app.post('/api/read', async ctx => {
	ctx.body = await getDb(ctx.request.body.gameName).get(ctx.request.body.sectionName)
})
app.post('/api/write', async ctx => {
	// try {
	const db = getDb(ctx.request.body.gameName)
	await db.put(ctx.request.body.sectionName, ctx.request.body.content)
	// }
	// catch (e) {
	// 	ctx.throw(401)
	// }
	ctx.body = 'ok'
})
app.post('/api/del', async ctx => {
	const db = getDb(ctx.request.body.gameName)
	await db.del(ctx.request.body.sectionName)
	ctx.body = 'ok'
})
app.get('/res/:gameName/*', async ctx => {
	// ctx.body = ctx.path
	await send(ctx, ctx.path.slice(ctx.params.gameName.length + 5), { root: `${gamesDir}/${ctx.params.gameName}/res` })
})