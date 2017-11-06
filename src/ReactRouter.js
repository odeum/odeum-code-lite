import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

import App from 'App'

import React, { Component } from 'react'

export default class ReactRouter extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path='/' component={App} />
				</div>
			</Router>
		)
	}
}
