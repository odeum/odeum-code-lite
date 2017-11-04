import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import ReactRouter from 'ReactRouter'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
require('typeface-source-sans-pro')

ReactDOM.render(
	<ReactRouter />,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./ReactRouter', () => {
		const NextApp = require('./ReactRouter').default
		ReactDOM.render(
			<NextApp />,
			document.getElementById('root')
		)
	})
}
// render(<ReactRouter />, document.getElementById('root'))
registerServiceWorker()
