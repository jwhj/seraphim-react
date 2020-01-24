const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const serve = require('koa-static')
const mount = require('koa-mount')
const router = new Router()
const { exec } = require('child_process')
app.listen(4000)
if (process.argv.indexOf('build') !== -1) {
	exec('browserify -p tinyify src/index.js > public/bundle.js', (err) => {
		if (err) console.error(err)
		process.exit()
	})
}
if (process.argv.indexOf('debug') !== -1) {
	const browserify = require('browserify')
	const stringify = require('stringify')
	const sourceify = require('sourceify')
	router.get('/bundle.js', ctx => {
		ctx.set('Content-Type', 'text/javascript')
		ctx.body = browserify('src/index.js', { debug: true })
			.transform(stringify)
			.transform(sourceify)
			.bundle()
			.on('error', console.error)
	})
	// router.use('/source', serve('.'))
	app.use(mount('/source', serve('.')))
}
// router.use('/', serve(__dirname + '/public'))
// router.use(require('./src/server').default.routes())
// app.use(require('./server').default.routes())
app.use(router.routes())
app.use(mount('/', serve('public')))