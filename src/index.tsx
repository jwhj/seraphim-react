import React, { useState } from "react"
import Editor from "./editor"
import Game from "./game"
import { defineStyle } from './define-style'
const {
	HashRouter: Router,
	Switch,
	Route,
	Link,
	useHistory
} = ReactRouterDOM
const {
	Button
} = MaterialUI
const Index = () => {
	const barStyle = defineStyle({
		width: '30%',
		marginBottom: 10
	})
	const history = useHistory()
	const start = () => {
		const gameName = prompt('Game name:')
		if (gameName) {
			history.push(`/game/${gameName}`)
		}
	}
	return (
		<React.Fragment>
			<h1>UI随便吧，反正也没有人会用</h1>
			<div style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
				<Button style={barStyle} variant="contained" onClick={start}>Start</Button>
				<Link style={barStyle} variant="contained" to="/editor" component={Button}>Editor</Link>
			</div>
		</React.Fragment>
	)
}
ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={Index}></Route>
			<Route path="/game/:gameName" component={Game} />
			<Route path="/editor" component={Editor} />
		</Switch>
	</Router >,
	document.querySelector("#app"),
)
