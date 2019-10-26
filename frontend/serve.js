const browserify = require('browserify')
const execSync = require('child_process').execSync
const express = require('express')
const app = express()
const debug = process.argv.indexOf('debug') != -1
if (debug) {
	app.all('/bundle.js', (req, res) => {
		res.header('Content-Type', 'text/javascript')
		browserify(__dirname + '/js/index.js', { debug: true }).bundle().pipe(res)
	})
} else {
	// execSync('browserify js/index.js -o bundle.js')
	execSync('browserify js/index.js | terser --compress > bundle.js')
	// execSync('browserify js/index.js | babel -f bundle.js | uglifyjs > bundle.js')
}
app.use(express.static(__dirname))
app.listen(4000)
console.log('Start serving...')