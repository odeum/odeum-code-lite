import React, { Component } from 'react'
import { AppContainer, Header, MenuPanel, Menu, Footer, Workspace,  } from 'odeum-app'
import { Button, ButtonPanel, Modal, TabPanel, Tab } from 'odeum-ui'
import { } from 'odeum-primitives'


class App extends Component {
	render() {
		return (
			<AppContainer>
				<Header search={true} />
				<MenuPanel>
					<Menu icon={'dashboard'} label={'Dashboard'}>
						<TabPanel>
							<Tab icon={'dashboard'} label={'Tab 1'}/>
							<Tab icon={'dashboard'} label={'Tab 2'}/>
							<Tab icon={'dashboard'} label={'Tab 3'}/>
						</TabPanel>
					</Menu>
					<Menu icon={'assignment'} label={'Forms'}>
						<TabPanel>
							<Tab icon={'assignment'} label={'Tab 1'} />
							<Tab icon={'assignment'} label={'Tab 2'} />
							<Tab icon={'assignment'} label={'Tab 3'} />
						</TabPanel>
					</Menu>
				</MenuPanel>
				<Footer />
			</AppContainer>
		)
	}
}

export default App
