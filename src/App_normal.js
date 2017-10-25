import React, { Component } from 'react'
import { AppContainer, Header, MenuPanel, Menu, Footer, Register } from 'odeum-app'
import { Button, ButtonPanel, Modal, TabPanel, Tab } from 'odeum-ui'
import { Heading, Text } from 'odeum-primitives'

// Adding custom workspace content components
import Workspaces from './components/Workspaces'

// Full path to selected theme
import theme from './themes/bluehorizon.js'
import logo from './bluehorizon.svg'

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
				<Modal icon={'web_asset'} label={'This is a modal window'}/>
				<Register help={'12345-67890'} search={'12345-67890'}/>
			</div>
		)
	}
}

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			menuIsOpen: true
		}			
	}
	
	renderWorkspaceTab = () =>
		<div>
			{/* Sub tab panel */}
			<TabPanel>
				<Tab icon={'menu'} label={'Tools'} active={true} />
				<Tab icon={'timeline'} label={'Workflow'} />
				<Tab icon={'cloud_upload'} label={'Upload'} />
			</TabPanel>
		</div>

	onToggleMenu = () => {
		this.setState(({ menuIsOpen }) => (
			{
				menuIsOpen: !menuIsOpen
			}
		))
	}

	render() {
		return (
			<AppContainer theme={theme} login={true} route={'/'}>
				<Header logo={logo} search={true} notifications={true} profile={true} avatar={true} />
				
				<MenuPanel open={this.state.menuIsOpen} onToggle={this.onToggleMenu} messages={true}>
				
					<Menu icon={'dashboard'} label={'Dashboard'} active={true} route={'/dashboard'}>
				
						<TabPanel>
							{/* Tabs using a render prop (workspace prop) that returns a component */}
							<Tab icon={'menu'} label={'Tab 1'} workspace={this.renderWorkspaceTab} route={'/dashboard/menu'}/>
							<Tab icon={'timeline'} label={'Tab 2'} workspace={<WorkSpaceComponent/>} route={'/dashboard/timeline'} />
							<Tab icon={'cloud_upload'} label={'Tab 3'} workspace={<h3>This is my upload workspace</h3>} route={'/dashboard/upload'}/>

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
							{/* Tabs with key prop for dynamic composition */}
							<Tab key={'1'} icon={'assignment'} label={'Tab 6'} workspace={this.renderWorkspaceTab} active={true}/>
							<Tab key={'2'} icon={'assignment'} label={'Tab 7'} workspace={renderFunction}/>
							<Tab key={'3'} icon={'assignment'} label={'Tab 8'} workspace={this.renderWorkspaceTab} closeable={true} />
							<Tab key={'4'} icon={'assignment'} label={'Tab 9'} workspace={Workspaces.MyWorkspace} closeable={true} />
						</TabPanel>
				
					</Menu>
				
				</MenuPanel>
				
				<Footer label={renderFooterLabel} labellink={handleLink} help={true}/>
			</AppContainer>
		)
	}
}

export default App

const renderFunction = () =>
	<div>
		This is a stateless functional component
	</div>

const renderFooterLabel = () =>
	<div>
		<strong>ODEUM Code Lite </strong> v2.0.0 (c) 2017
	</div>

const handleLink = () => {
	return 'https://odeumcode.com'
}
	
