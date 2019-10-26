const exec = require('child_process').exec
const a = exec('node index.js', {
	cwd: './backend'
})
a.stdout.pipe(process.stdout)
a.stderr.pipe(process.stderr)
const s = process.argv.indexOf('debug') != -1 ? ' debug' : ''
const b = exec('node serve.js' + s, {
	cwd: './frontend'
})
b.stdout.pipe(process.stdout)
b.stderr.pipe(process.stderr)