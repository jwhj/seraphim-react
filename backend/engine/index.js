const uuid = require('uuid')
function engine(eid, name) {
	this.eid = eid
	this.name = name
	this.id = 'start'
	this.ctx = null
	this.ans = {}
	this.data = {}
	// this.lst = []
	this.state = {
		char: null,
		text: '',
		newText: ''
	}
}
engine.prototype.nextLine = async function () {
	if (!this.ctx) {
		this.ctx = (await this.getDb().get(this.id)).split('\n')
		this.pt = 0
		this.q = []
		this.qt = 0
	}
	if (this.qt < this.q.length) return this.q[this.qt++]
	else if (this.pt < this.ctx.length) return this.ctx[this.pt++]
	else return null
}
const cmds = {}
cmds['\\clear'] = function (arg) {
	this.state.text = ''
	this.state.newText = ''
	if (arg.length > 1) return true
}
cmds['\\goto'] = function (arg) {
	this.id = arg[1]
	this.ctx = null
}
engine.prototype.addLine = function (s) {
	this.q.push(s)
}
cmds['\\script'] = function (arg) {
	const code = arg.slice(1).join(' ')
	void (new Function(code)).call(this)
}
cmds['\\beginscript'] = async function (arg) {
	const code = []
	while (1) {
		const s = await this.nextLine()
		if (s === '\\endscript') break
		code.push(s)
	}
	return (new Function(code.join('\n'))).call(this, arg)
}
cmds['\\char'] = function (arg) {
	this.state.char = arg[1]
	this.state.text = ''
	this.state.newText = ''
}
cmds['\\background-image'] = function (arg) {
	this.state.bimg = arg[1]
}
cmds['\\query'] = async function (arg) {
	const txt = await this.getDb().get(arg[1])
	this.state.qry = [arg[1], txt]
	return true
}
cmds['\\queryopt'] = async function (arg) {
	const tmpEngine = new engine(uuid(), this.name)
	cmds['\\goto'].call(tmpEngine, ['\\goto', arg[1]])
	const lst = []
	while (1) {
		const s = await tmpEngine.next()
		if (s === null) break
		else lst.push(s.newText)
	}
	this.state.opt = [arg[1], lst]
	return true
}
engine.prototype.next = async function () {
	while (1) {
		this.state.text += this.state.newText
		this.state.newText = ''
		const s = await this.nextLine()
		if (s === null) return null
		if (s[0] === '\\') {
			const lst = s.split(' ').filter(c => c !== '')
			if (lst[0] in cmds)
				if (await cmds[lst[0]].call(this, lst)) break
		}
		else if (s === '`') {
			if (cmds['\\char'].call(this, ['\\char', null])) break
		}
		else if (s === '') this.state.newText += '<br/>'
		else {
			this.state.newText += s
			// this.lst.push(s)
			break
		}
	}
	return this.state
}
module.exports = engine