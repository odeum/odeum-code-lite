import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import App from 'App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

require('typeface-source-sans-pro')

class AppRouter extends Component {
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

render(
	<AppRouter />,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('components/AppRouter/AppRouter', () => {
		const NextApp = require('components/AppRouter/AppRouter').default
		render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}

registerServiceWorker()
