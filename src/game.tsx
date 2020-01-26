import React, { useState, useEffect, useRef } from 'react'
import Engine from './engine'
import Typed from 'typed.js'
const {
	Button,
	Icon
} = MaterialUI
export default () => {
	const [engineLoading, setEngineLoading] = useState(true)
	const [text, setText] = useState('')
	const engine = useRef<Engine>()
	const type = useRef<Typed>()
	const getEngine = (): Engine => {
		if (!engine.current) return engine.current = new Engine('test')
		else return engine.current
	}
	// useEffect(() => {
	// 	const engine = getEngine()
	// 	setText(engine.state.text + engine.state.curText)
	// }, [getEngine().state])
	useEffect(() => {
		void (async () => {
			const engine = getEngine()
			await engine.load('start')
			// await new Promise(res => setTimeout(res, 1000))
			setEngineLoading(false)
		})()
	}, [])
	const finish = () => {
		type.current.destroy()
		type.current = null
		const engine = getEngine()
		setText(engine.state.text + engine.state.curText)
	}
	const next = async () => {
		const engine = getEngine()
		if (type.current) {
			finish()
		}
		else {
			await engine.next()
			setText(engine.state.text)
			type.current = new Typed('#type', {
				strings: [engine.state.curText],
				typeSpeed: 20,
				onComplete() {
					finish()
				}
			})
		}
	}
	return (
		<div>
			{engineLoading ? 'Loading...' : (
				<Button variant="outlined" onClick={next}>next<Icon>arrow_forward</Icon></Button>
			)}
			<br />
			<span dangerouslySetInnerHTML={{ __html: text }}></span>
			<span id="type"></span>
		</div>
	)
}