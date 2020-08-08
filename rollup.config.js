import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
export default {
	input: 'dist/index.js',
	output: {
		file: 'public/bundle.js',
		format: 'umd',
		sourcemap: true,
		globals: {
			'react': 'React',
			'typed.js': 'Typed',
			'axios': 'axios'
		}
	},
	external: ['react', 'typed.js', 'axios'],
	plugins: [
		resolve({
			browser: true
		}),
		commonjs(),
		sourcemaps()
	]
}