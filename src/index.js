import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ReactRouter from 'ReactRouter'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<ReactRouter />, document.getElementById('root'))
registerServiceWorker()
