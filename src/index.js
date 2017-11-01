import React from 'react'
import { render } from 'react-dom'
// import App from './App'
import ReactRouter from 'ReactRouter'
import registerServiceWorker from './registerServiceWorker'

render(<ReactRouter />, document.getElementById('root'))
registerServiceWorker()
