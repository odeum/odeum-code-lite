import React, { Component } from 'react'
import Routing from './Routing'
import { Logo } from './AppStyles'


class App extends Component {
	render() {
		return (
			<div>
				<Logo size={'31px'} />
				<Routing />
			</div>
		)
	}
}

export default App
