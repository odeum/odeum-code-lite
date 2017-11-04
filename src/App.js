import React, { Component } from 'react'
import { AppContainer } from 'AppStyles'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import MenuPanel from 'components/Menu/MenuPanel'
import BigLogo from 'odeum_code_logo.svg'
import SmallLogo from 'odeum_code_logo_icon.svg'
import TabContainer from 'components/Tabs/TabContainer'
import Tab from 'components/Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'
import NoTabsContainer from 'components/NoTabsContainer/NoTabsContainer'
/* Demo */
import ReactComp from 'Demos/ReactComp'
import { SimpleDiv } from 'Demos/SimpleDiv'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			helpID: 0
		}
		Workspace.defaultProps = {
			SetHelpID: this.SetHelpID
		}
	}
	SetHelpID = (helpID) => helpID === this.state.helpID ? null : this.setState({ helpID: helpID })
	render() {
		return (
			<AppContainer>
				<Header logo={BigLogo} search={false} notification={false} avatar={false} logos={[BigLogo, SmallLogo]} />
				<MenuPanel>
					{
						/* No Tabs Containers Demos */
					}
					<NoTabsContainer route='/' exact>
						Home Demo <br />Last help ID: {this.state.helpID}
					</NoTabsContainer>
					<NoTabsContainer route='/notabs' label='No Tabs Menu Item' icon='help'>
						No Tabs Scene
					</NoTabsContainer>
					{/* 
						End Region
					*/}

					{ /* 
						Workspace with Children  
					*/}
					<TabContainer icon={'help'} route='/children_menu' label={'Menu With Children'} >
						<Tab icon={'assignment'} label={'Overflow Test'} route={'/lorem_ipsum'} >
							<Workspace helpID={1}>
								<SimpleDiv/>
							</Workspace>
						</Tab>
						<Tab icon={'assignment_turned_in'} label={'React Component'} route={'/react-component'}>
							<Workspace helpID={2}>
								<ReactComp/>
							</Workspace>
						</Tab>
						<Tab icon={'phone'} label={'Phone'} route={'/phone'} >
							<Workspace helpID={3}>
								{<iframe title={'phone'} width="560" height="315" src="https://www.youtube.com/embed/EVBsypHzF3U?start=170" frameborder="0" allowfullscreen></iframe>}
							</Workspace>
						</Tab>
					</TabContainer>
					{/* 
						End Region
					*/}

					{/* 
						Workspace with props as workspace
					*/}
					<TabContainer icon={'help'} route='/menu2' label={'Menu With Workspace Prop'}>
						<Tab label={'React Component'} route={'/react-component'} workspace={ReactComp} />
						<Tab label={'SimpleDiv'} icon={'phone'} route={'/simple-div'} workspace={SimpleDiv} />
					</TabContainer>
					{/* 
						End Region
					*/}
				</MenuPanel>

				<Footer />
			</AppContainer>
		)
	}
}
