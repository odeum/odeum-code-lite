import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { render } from 'react-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import App from 'App'

// import AppRouter from 'AppRouter'

class AppRouter extends Component {
	render() {
		return (
			<App/>
		)
	}
}
export default AppRouter

ReactDOM.render(
	<AppRouter />,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./index'.default, () => {
		const NextApp = require('./index').default
		ReactDOM.render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}

registerServiceWorker()

