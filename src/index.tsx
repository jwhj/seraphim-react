import React, { useState } from 'react'
import Editor from './editor'
import Game from './game'
const {
	HashRouter: Router,
	Switch, Route
} = ReactRouterDOM
ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={Game} />
			<Route path="/editor" component={Editor} />
		</Switch>
	</Router>,
	document.querySelector('#app')
)