import React, { Component } from 'react'
import { AppContainer, Header, MenuPanel, Menu, Footer } from 'odeum-app'
import { Button, ButtonPanel, Modal, TabPanel, Tab } from 'odeum-ui'
import { Heading, Text } from 'odeum-primitives'

// Full path to selected theme
import theme from './themes/bluehorizon.js'

class WorkSpaceComponent extends Component {
	render() {
		return (
			<div>
				<Heading>This is my workspace header</Heading>
				<Text>This is my workspace intro text.</Text>
				<ButtonPanel>
					<Button label={'Button 1'}/>
					<Button label={'Button 2'}/>
					<Button label={'Button 3'}/>
				</ButtonPanel>
				<Modal icon={'web_asset'} label={'This is a modal window'}
				/>
			</div>
		)
	}
}


class App extends Component {

	renderWorkspaceTab = () =>
		<div>
			Component Content
		</div>

	render() {
		return (
			<AppContainer theme={theme}>
				<Header search={true} />
				<MenuPanel>
					<Menu icon={'dashboard'} label={'Dashboard'}>
						<TabPanel>
							{/* Tabs using a render prop (workspace prop) that returns a component */}
							<Tab icon={'dashboard'} label={'Tab 1'} workspace={this.renderWorkspaceTab}/>
							<Tab icon={'dashboard'} label={'Tab 2'} workspace={<WorkSpaceComponent />}/>
							<Tab icon={'dashboard'} label={'Tab 3'}/>

							{/* Tabs that renders the workspace as child */}
							<Tab icon={'dashboard'} label={'Tab 4'}>
								<WorkSpaceComponent />
							</Tab>

							<Tab icon={'dashboard'} label={'Tab 5'}>
								<WorkSpaceComponent />
							</Tab>

						</TabPanel>
					</Menu>
					<Menu icon={'assignment'} label={'Forms'}>
						<TabPanel>
							<Tab icon={'assignment'} label={'Tab 1'} workspace={this.renderWorkspaceTab} active={true}/>
							<Tab icon={'assignment'} label={'Tab 2'} workspace={this.renderWorkspaceTab}/>
							<Tab icon={'assignment'} label={'Tab 3'} workspace={this.renderWorkspaceTab} closeable={true} />
						</TabPanel>
					</Menu>
				</MenuPanel>
				<Footer config={true}/>
			</AppContainer>
		)
	}
}

export default App

