import React, { Component } from 'react'
import Routing from './Routing'
// import { Logo } from './AppStyles'
// import Logo from './LogoComp'
import Logo from './LogoComp'
import uuid from 'uuid'
// const uuidv1 = require('uuid/v1')


console.log(uuid())


class App extends Component {
	render() {
		return (
			<div>
				{/* <Logo size={'31px'} /> */}
				<Routing />
				<Logo />
			</div>
		)
	}
}

export default App
