import React, { Component } from 'react'
import { AppContainer, Header, MenuPanel, Menu, Footer } from 'odeum-app'
import { TabPanel, Tab } from 'odeum-ui'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			menuIsOpen: true,
			helpId: ''
		}			
	}
	
	render() {
		return (
			<AppContainer>
				<Header />
				<MenuPanel>
					<Menu>
						<TabPanel>							
							<Tab />
							<Tab />
							<Tab />
						</TabPanel>
					</Menu>
				</MenuPanel>
				<Footer/>
			</AppContainer>
		)
	}
}

export default App

/* Outputs:

Menu Item
	Tab
	Tab
	Tab
*/

