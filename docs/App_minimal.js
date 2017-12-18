import React, { Component } from 'react'
import { AppContainer, Header, MenuPanel, Menu, Footer, Login, Protected } from 'odeum-app'
import { TabPanel, Tab } from 'odeum-ui'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			open: true,
			helpId: '',
			isLoggedIn: false
		}			
	}
	
	render() {
		const { open, helpId, isLoggedIn } = this.state
		return (
			<AppContainer>
				<Header />
				<MenuPanel open={open}>
					<Menu>
						<Tab>
							<Login />
						</Tab>
						<Tab>
							Tab content ...
						</Tab>
					</Menu>
					<Protected isLoggedIn={isLoggedIn}>
						<Menu>
							<Tab>
								Tab content ...
							</Tab>
							<Tab>
								Tab content ...
							</Tab>
						</Menu>
					</Protected>
				</MenuPanel>
				<Footer/>
			</AppContainer>
		)
	}
}

export default App


