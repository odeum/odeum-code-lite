import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import App from 'App'

// import AppRouter from 'AppRouter'

// Christian Do not touch this, this is Hot Reload Module code for my own dev "needs"
// it does not affect with absolute anything odeum-app as it is not included anywhere
// A user if wishes can do the same thing on it's own project 
// or keep the same format from OA-Tester

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
export default AppRouter

render(
	<AppRouter />,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./index'.default, () => {
		const NextApp = require('./index').default
		render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}

registerServiceWorker()

