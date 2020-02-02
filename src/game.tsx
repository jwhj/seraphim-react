import React, { useState, useEffect, useRef } from 'react'
import Engine from './engine'
import Typed from 'typed.js'
const {
	Button,
	Icon,
	Card,
	Divider,
	Modal,
	Backdrop,
	Fade,
	List, ListItem
} = MaterialUI
export default () => {
	const [tmp, setTmp] = useState(false)
	const [srcHeight, setSrcHeight] = useState('')
	const [engineLoading, setEngineLoading] = useState(true)
	const [char, setChar] = useState<string>(null)
	const [text, setText] = useState('')
	const [showOptions, setShowOptions] = useState(false)
	const engine = useRef<Engine>()
	const type = useRef<Typed>()
	const adjustSizes = () => {
		setSrcHeight(/Android|iPhone/i.test(navigator.userAgent) ? '8.5em' : '12em')
	}
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
			await engine.selectSection('start')
			// await new Promise(res => setTimeout(res, 1000))
			setEngineLoading(false)
			adjustSizes()
			addEventListener('resize', adjustSizes)
			addEventListener('touchmove', (e: TouchEvent) => {
				e.preventDefault()
			}, { passive: false })
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
			if (engine.state.qry) {
				const ans = prompt(engine.state.qry)
				engine.ans[engine.state.qid] = ans
				engine.state.qry = null
				// setTimeout(next)
				next()
			}
			else if (engine.state.opts) {
				setShowOptions(true)
				// engine.state.opts = null
				// setTimeout(next)
			}
			else {
				setChar(engine.state.char)
				setText(engine.state.text)
				type.current = new Typed('#type', {
					strings: [engine.state.curText],
					typeSpeed: 35,
					onComplete() {
						finish()
					}
				})
			}
			if (engine.state.backgroundImageChanged) {
				engine.state.backgroundImageChanged = false
				setTmp(false)
				setTimeout(() => {
					setTmp(true)
				})
			}
		}
	}
	const choose = async (i: number, s: string) => {
		const engine = getEngine()
		engine.ans[engine.state.qid] = [i, s]
		engine.state.opts = null
		setShowOptions(false)
		await next()
	}
	return (
		<>
			<Fade in={tmp} timeout={1500}>
				<div style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundImage: `url("/res/test${getEngine().state.backgroundImage}")`
				}}></div>
			</Fade>
			{/* {engineLoading ? 'Loading...' : (
				<Button variant="outlined" onClick={next}>next<Icon>arrow_forward</Icon></Button>
			)}
			<br /> */}
			<Modal open={showOptions} BackdropComponent={Backdrop} BackdropProps={{ transitionDuration: { enter: 1500, exit: 500 } }}>
				<Fade in={showOptions} timeout={{ enter: 1500, exit: 500 }}>
					<div style={{
						padding: '5% 10%',
						color: 'white',
						height: '100%'
					}}>
						<List>
							{showOptions && getEngine().state.opts.map((x, i) => (
								<ListItem key={i} button onClick={() => choose(i, x)}>
									{x}
								</ListItem>
							))}
						</List>
					</div>
				</Fade>
			</Modal>
			<div style={{
				width: '100%',
				height: srcHeight,
				padding: 10,
				display: 'flex',
				justifyContent: 'center',
				position: 'fixed',
				bottom: 0
			}}>
				<Card elevation={4} style={{
					width: '80%',
					backgroundColor: char ? '#EEE' : '#AAA',
					transition: 'background-color 1s ease',
					padding: 10,
					opacity: 0.8
				}} onClick={next}>
					{char && (
						<div style={{ width: '30%' }}>
							<span style={{ color: '#888' }}>{char}</span>
							<Divider />
						</div>
					)}
					<div style={{ padding: '0 10px' }}>
						<span dangerouslySetInnerHTML={{ __html: text }}></span>
						<span id="type"></span>
					</div>
				</Card>
			</div>
		</>
	)
}