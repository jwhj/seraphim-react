import React, { useState, useEffect, useRef } from 'react'
import Engine from './engine'
import Typed from 'typed.js'
const {
	Button, Fab,
	Icon,
	Card,
	Divider,
	Backdrop,
	Fade,
	List, ListItem
} = MaterialUI
const BackgroundImage = ({ src, style, ...rest }: { src: string, style?: object }) => {
	// const { style, ...rest1 } = rest
	return (
		<div style={Object.assign({
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundImage: `url("${src}")`
		}, style)}{...rest}></div>
	)
}
const backgroundSwitchTimeout = 1000
const showOptionsTimeout = { enter: 1500, exit: 500 }
export default (props: { match: { params: { gameName: string } } }) => {
	const gameName = props.match.params.gameName
	const [tmp, setTmp] = useState(false)
	const [prevBackgroundImage, setPrevBackgroundImage] = useState<string>()
	const [srcHeight, setSrcHeight] = useState('')
	const [engineLoading, setEngineLoading] = useState(true)
	const [char, setChar] = useState<string>()
	const [text, setText] = useState('')
	const [showOptions, setShowOptions] = useState(false)
	const engineRef = useRef<Engine>()
	if (!engineRef.current) engineRef.current = new Engine(gameName)
	const engine = engineRef.current
	const type = useRef<Typed>()
	const adjustSizes = () => {
		setSrcHeight(/Android|iPhone/i.test(navigator.userAgent) ? '8.5em' : '12em')
	}
	// const getEngine = (): Engine => {
	// 	if (!engine.current) return engine.current = new Engine(gameName)
	// 	else return engine.current
	// }
	useEffect(() => {
		void (async () => {
			await engine.selectSection('start')
			// await new Promise(res => setTimeout(res, 1000))
			setEngineLoading(false)
			adjustSizes()
			addEventListener('resize', adjustSizes)
			addEventListener('touchmove', (e: TouchEvent) => {
				e.preventDefault()
			}, { passive: false })
			next()
		})()
	}, [])
	const finish = () => {
		type.current.destroy()
		type.current = undefined
		setText(engine.state.text + engine.state.curText)
	}
	const next = async (): Promise<boolean> => {
		if (type.current) {
			finish()
		}
		else {
			await engine.next()
			if (engine.state.qry) {
				const ans = prompt(engine.state.qry)
				engine.ans[engine.state.qid] = ans
				engine.state.qry = undefined
				setTimeout(next)
				return false
			}
			else if (engine.state.opts) {
				setShowOptions(true)
				// engine.state.opts = undefined
				// setTimeout(next)
				return false
			}
			else {
				setChar(engine.state.char)
				setText(engine.state.text)
				type.current = new Typed('#type', {
					strings: [engine.state.curText],
					typeSpeed: 27,
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
					setTimeout(() => setPrevBackgroundImage(engine.state.backgroundImage), backgroundSwitchTimeout)
				})
			}
		}
		return true
	}
	const fastForward = async (maxStep?: number) => {
		maxStep = maxStep || Infinity
		for (let i = 0; i < maxStep && await next(); i++);
	}
	const choose = async (i: number, s: string) => {
		engine.ans[engine.state.qid] = [i, s]
		engine.state.opts = undefined
		setShowOptions(false)
		await next()
	}
	return (
		<>
			{prevBackgroundImage && <BackgroundImage src={`/res/${gameName}${prevBackgroundImage}`} />}
			{/* <Fade in={!tmp} timeout={{ enter: 0, exit: 1500 }}>
				<BackgroundImage src={`/res/f7${prevBackgroundImage}`} />
			</Fade> */}
			<Fade in={tmp} timeout={{ enter: backgroundSwitchTimeout, exit: 0 }}>
				<BackgroundImage src={`/res/${gameName}${engine.state.backgroundImage}`} />
			</Fade>
			{/* {engineLoading ? 'Loading...' : (
				<Button variant="outlined" onClick={next}>next<Icon>arrow_forward</Icon></Button>
			)}
			<br /> */}
			<Fade in={showOptions} timeout={showOptionsTimeout}>
				<Backdrop open={showOptions} style={{ zIndex: 5 }}>
					<div style={{
						padding: '5% 10%',
						color: 'white',
						width: '100%',
						height: '100%'
					}}>
						<List>
							{showOptions && engine.state.opts.map((x, i) => (
								<ListItem key={i} button onClick={() => choose(i, x)}>
									{x}
								</ListItem>
							))}
						</List>
					</div>
				</Backdrop>
			</Fade>
			<div style={{
				position: 'fixed',
				right: 0,
				top: 0,
				margin: 10
			}}>
				<Fab onClick={() => fastForward()} size="small" style={{ marginRight: 10 }}><Icon>directions_run</Icon></Fab>
				<Fab onClick={() => fastForward(15)} size="small"><Icon>directions_walk</Icon></Fab>
			</div>
			<div style={{
				width: '100%',
				height: srcHeight,
				padding: 10,
				display: 'flex',
				justifyContent: 'center',
				position: 'fixed',
				left: 0,
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