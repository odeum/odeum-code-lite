import React from 'react'
import { render } from 'react-dom'
// import App from './App'
import ReactRouter from 'ReactRouter'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
require('typeface-source-sans-pro')

render(<ReactRouter />, document.getElementById('root'))
registerServiceWorker()
