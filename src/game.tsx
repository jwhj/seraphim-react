import React, { useState, useEffect, useRef, useCallback } from "react"
import Saves from "./saves"
import Engine from "./engine"
import Typed from "typed.js"
import uuid from 'uuid/v4'
import { usePrompt } from './dialog-utils'
const {
	IconButton,
	Fab,
	Icon,
	Card,
	Divider,
	Backdrop,
	Dialog,
	Fade,
	List,
	ListItem,
	Drawer,
} = MaterialUI
const BackgroundImage = (
	{ src, style, ...rest }: { src: string, style?: StyleType },
) => {
	// const { style, ...rest1 } = rest
	return (
		<div
			style={Object.assign({
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundImage: `url("${src}")`,
			}, style)}
			{...rest}
		>
		</div>
	)
}
const backgroundSwitchTimeout = 500
const showOptionsTimeout = { enter: 1500, exit: 500 }
const saves = localforage.createInstance({ name: "saves" })
export default (props: { match: { params: { gameName: string } } }) => {
	const gameName = props.match.params.gameName
	const [tmp, setTmp] = useState(false)
	// const [prevBackgroundImage, setPrevBackgroundImage] = useState<string>()
	const [backgroundImageList, setBackgroundImageList] = useState<[string, string][]>([])
	const [srcHeight, setSrcHeight] = useState("")
	const [engineLoading, setEngineLoading] = useState(true)
	const [char, setChar] = useState<string>()
	const [text, setText] = useState("")
	const [showOptions, setShowOptions] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const [showSaves, setShowSaves] = useState(false)
	const engineRef = useRef<Engine>()
	if (!engineRef.current) engineRef.current = new Engine(gameName)
	const engine = engineRef.current
	const type = useRef<Typed>()
	const selectType = useRef<string>()
	const ignoreAction = useRef(false)
	const [$prompt, node] = usePrompt()
	const adjustSizes = () => {
		setSrcHeight(
			/Android|iPhone/i.test(navigator.userAgent) ? "8.5em" : "12em",
		)
	}
	// const getEngine = (): Engine => {
	// 	if (!engine.current) return engine.current = new Engine(gameName)
	// 	else return engine.current
	// }
	useEffect(() => {
		void (async () => {
			await engine.selectSection("start")
			// await new Promise(res => setTimeout(res, 1000))
			setEngineLoading(false)
			adjustSizes()
			addEventListener("resize", adjustSizes)
			addEventListener("touchmove", (e: TouchEvent) => {
				e.preventDefault()
			}, { passive: false })
			addEventListener('keydown', handleKeyDown)
			document.querySelectorAll('button').forEach(item => {
				item.addEventListener('mousedown', e => e.preventDefault(), { passive: false })
			})
			next()
		})()
		return () => {
			removeEventListener('keydown', handleKeyDown)
		}
	}, [])
	const handleKeyDown = useCallback((e: KeyboardEvent) => {
		switch (e.key) {
			case "Escape":
				setShowMenu(true)
				break
			case " ":
				next()
				break
			default:
				break
		}
	}, [])
	const finish = () => {
		const engine = engineRef.current
		type.current.destroy()
		type.current = undefined
		setText(engine.state.text + engine.state.curText)
	}
	const updateFromEngine = async (restoreFromSave?: boolean): Promise<boolean> => {
		const engine = engineRef.current
		// if (restoreFromSave) {
		// 	setChar(engine.state.char)
		// 	setText(engine.state.text + engine.state.curText)
		// 	setShowOptions(false)
		// }
		if (engine.state.backgroundImageChanged || restoreFromSave) {
			engine.state.backgroundImageChanged = false
			// setTmp(false)
			// setTimeout(() => {
			// 	setTmp(true)
			// 	setTimeout(
			// 		() => setPrevBackgroundImage(engine.state.backgroundImage),
			// 		backgroundSwitchTimeout,
			// 	)
			// })
			const item: [string, string] = [engine.state.backgroundImage, uuid()]
			backgroundImageList.push(item)
			if (backgroundImageList.length > 10) backgroundImageList.splice(0, 5)
			setBackgroundImageList(backgroundImageList)
		}
		if (engine.state.qry) {
			ignoreAction.current = true
			const ans = await $prompt(engine.state.qry)
			engine.ans[engine.state.qid] = ans
			engine.state.qry = undefined
			setTimeout(next)
			ignoreAction.current = false
			return false
		} else if (engine.state.opts) {
			ignoreAction.current = true
			setShowOptions(true)
			// engine.state.opts = undefined
			// setTimeout(next)
			return false
		} else {
			setChar(engine.state.char)
			setText(engine.state.text)
			type.current = new Typed("#type", {
				strings: [engine.state.curText],
				typeSpeed: 27,
				onComplete() {
					finish()
				},
			})
		}
		return true
	}
	const next = async (flag?: boolean): Promise<boolean> => {
		const engine = engineRef.current
		if (type.current) {
			finish()
		} else if (!ignoreAction.current) {
			if (!flag) await engine.next()
			if (!await updateFromEngine()) return false
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
		ignoreAction.current = false
		await next()
	}
	const onSelect = async (saveName: string) => {
		if (selectType.current === "load") {
			engineRef.current = Engine.from(await saves.getItem(saveName))
			if (type.current) {
				type.current.destroy()
				type.current = undefined
			}
			setShowSaves(false)
			setShowMenu(false)
			await updateFromEngine(true)
		} else if (selectType.current === "save") {
			await saves.setItem(saveName, engine)
		}
	}
	return (
		<React.Fragment>
			{/* {prevBackgroundImage &&
				<BackgroundImage src={`/res/${gameName}${prevBackgroundImage}`} />} */}
			{/* <Fade in={!tmp} timeout={{ enter: 0, exit: 1500 }}>
				<BackgroundImage src={`/res/f7${prevBackgroundImage}`} />
			</Fade> */}
			{/* <Fade in={tmp} timeout={{ enter: backgroundSwitchTimeout, exit: 0 }}>
				<BackgroundImage
					src={`/res/${gameName}${engine.state.backgroundImage}`}
				/>
			</Fade> */}
			{backgroundImageList.map(item => (
				<Fade key={item[1]} in={true} timeout={{ enter: backgroundSwitchTimeout, exit: 0 }}>
					<BackgroundImage src={`/res/${gameName}${item[0]}`} />
				</Fade>
			))}
			{/* {engineLoading ? 'Loading...' : (
				<Button variant="outlined" onClick={next}>next<Icon>arrow_forward</Icon></Button>
			)}
			<br /> */}
			<Fade in={showOptions} timeout={showOptionsTimeout}>
				<Backdrop open={showOptions} style={{ zIndex: 5, backgroundColor: 'rgba(0,0,0,0.7)' }}>
					<div
						style={{
							padding: "10%",
							color: "white",
							width: "100%",
							height: "100%",
						}}
					>
						<List style={{ width: '70%' }}>
							{engine.state.opts && engine.state.opts.map((x, i) => (
								<ListItem className="options-item" key={i} button onClick={() => choose(i, x)}>
									{x}
								</ListItem>
							))}
						</List>
					</div>
				</Backdrop>
			</Fade>
			<div
				style={{
					position: "fixed",
					right: 0,
					top: 0,
					margin: 10,
				}}
			>
				<Fab
					onClick={() => fastForward()}
					size="small"
					style={{ marginRight: 10 }}
				>
					<Icon>directions_run</Icon>
				</Fab>
				<Fab onClick={() => fastForward(15)} size="small">
					<Icon>
						directions_walk
    				</Icon>
				</Fab>
			</div>
			<Fab
				size="small"
				color="primary"
				onClick={() => setShowMenu(true)}
				style={{
					position: "fixed",
					left: 0,
					top: 0,
					margin: 10,
					zIndex: 6,
				}}
			>
				<Icon>dehaze</Icon>
			</Fab>
			<Drawer open={showMenu} onClose={() => setShowMenu(false)}>
				<div
					style={{
						width: document.documentElement.clientWidth * 0.35,
						padding: 10,
					}}
				>
					<List>
						<ListItem
							button
							onClick={() => {
								setShowSaves(true)
								selectType.current = "load"
							}}
						>
							Load
            			</ListItem>
						<ListItem
							button
							onClick={() => {
								setShowSaves(true)
								selectType.current = "save"
							}}
						>
							Save
           				 </ListItem>
					</List>
				</div>
			</Drawer>
			<Dialog
				open={showSaves}
				onClose={() => setShowSaves(false)}
				maxWidth="md"
				fullWidth
				PaperProps={{
					style: {
						height: '80%'
					}
				}}
			>
				<Saves onSelect={onSelect} />
			</Dialog>
			<div
				style={{
					width: "100%",
					height: srcHeight,
					padding: 10,
					display: "flex",
					justifyContent: "center",
					position: "fixed",
					left: 0,
					bottom: 0,
					userSelect: 'none'
				}}
			>
				<Card
					elevation={4}
					style={{
						width: "80%",
						backgroundColor: char ? "#EEE" : "#AAA",
						transition: "background-color 1s ease",
						padding: 10,
						opacity: 0.8,
					}}
					onClick={() => next()}
				>
					{char && (
						<div style={{ width: "30%" }}>
							<span style={{ color: "#888" }}>{char}</span>
							<Divider />
						</div>
					)}
					<div style={{ padding: "0 10px" }}>
						<span dangerouslySetInnerHTML={{ __html: text }}></span>
						<span id="type"></span>
					</div>
				</Card>
			</div>
			{node}
		</React.Fragment >
	)
}
