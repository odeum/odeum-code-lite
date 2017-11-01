import React, { Component } from 'react'
import { FrameworkContainer, WorkspaceContainer, Workspace } from 'AppStyles'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Menu from 'components/Menu/Menu'
import logo from 'odeum_code_logo.svg'
import TabContainer from 'components/Tabs/TabContainer'
import Tab from 'components/Tabs/Tab'
export default class App extends Component {
	render() {
		return (
			/* It is very messy for the moment */
			<FrameworkContainer>
				<Header logo={logo} search={true} notification={true} avatar={true} />
				<WorkspaceContainer>
					<Menu>
						<TabContainer route='/menu1' label={'Menu1'}>
							<Tab label={'tab1'} route={'/tab1'}>
								<Workspace>
									Workspace1
								</Workspace>
							</Tab>
							<Tab label={'tab2'} route={'/tab2'} >
								<Workspace>
									Workspace2
								</Workspace>
							</Tab>
							<Tab label={'tab3'} route={'/tab3'} >
								<Workspace>
									Workspace3
								</Workspace>
							</Tab>
						</TabContainer>


						<TabContainer route='/menu2' label={'Menu2'}>
							<Tab label={'tab4'} route={'/tab4'} >
								<Workspace>
									Workspace4
								</Workspace>
							</Tab>
							<Tab label={'tab5'} route={'/tab5'} >
								<Workspace>
									Workspace5
								</Workspace>
							</Tab>
							<Tab label={'tab6'} route={'/tab6'} >
								<Workspace>
									Workspace6
								</Workspace>
							</Tab>
						</TabContainer>

					</Menu>
				</WorkspaceContainer>
				<Footer />
			</FrameworkContainer>
		)
	}
}
