import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import App from 'App'
import Menu from 'components/Menu/Menu'
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
