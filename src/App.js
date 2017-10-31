import React, { Component } from 'react'
import { FrameworkContainer, WorkspaceContainer, MenuItem, Workspace } from 'AppStyles'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Menu from 'components/Menu/Menu'
import logo from 'logo.svg'
import TabContainer from 'components/Tabs/TabContainer'
export default class App extends Component {
	render() {
		return (
			/* It is very messy for the moment */
			<FrameworkContainer>
				<Header logo={logo} search={true} notification={true} avatar={true} />
				<WorkspaceContainer>
					<Menu>
						{/* rename to MenuItem */}
						<TabContainer route='/menu1' label={'hello'}>
							{/* The li's will be replaced with Tab/ TabComponent */}
							<li label={'tab'} route={'/tab1'} style={{ marginRight: 5 }}>
								<Workspace style={{ flex: 4, display: 'flex', flexFlow: 'row' }}>
									Workspace
								</Workspace>
							</li>
							<li label={'tab'} route={'/tab2'} style={{ marginRight: 5 }}>Tab</li>
							<li label={'tab'} route={'/tab3'} style={{ marginRight: 5 }}>Tab</li>
						</TabContainer>


						<TabContainer route='/menu2' label={'hello2'}>
							<li className='Tab' style={{ marginRight: 5 }}>
								<Workspace style={{ flex: 4, display: 'flex', flexFlow: 'row' }}>
									Workspace2
								</Workspace>
							</li>
							<li className='Tab' style={{ marginRight: 5 }}>Tab</li>
							<li className='Tab' style={{ marginRight: 5 }}>Tab</li>
						</TabContainer>

					</Menu>
				</WorkspaceContainer>
				<Footer />
			</FrameworkContainer>
		)
	}
}
