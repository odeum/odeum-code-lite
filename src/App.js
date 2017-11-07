import React, { Component } from 'react'
import AppContainer from 'components/AppContainer/AppContainer'
import Header from 'components/Header/Header'
import MenuPanel from 'components/Menu/MenuPanel'
import MenuNoTabs from 'components/MenuNoTabs/MenuNoTabs'
import Menu from 'components/Menu/Menu'
import Tab from 'components/Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'
import Footer from 'components/Footer/Footer'
import Logo from 'theme/logo.svg'
import LogoIcon from 'theme/logo_icon.svg'

/* Demo */
import ReactComp from 'demos/ReactComp'
import { SimpleDiv } from 'demos/SimpleDiv'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpID: 0
		}

		Workspace.defaultProps = {
			SetHelpID: this.SetHelpID
		}

		Tab.defaultProps = {
			SetHelpID: this.SetHelpID
		}

	}

	SetHelpID = (helpID) => helpID === this.state.helpID ? null : this.setState({ helpID: helpID })

	render() {
		return (
			<AppContainer>
				{/* What is it with the array of logos? */}
				<Header logo={Logo} search={false} notification={false} avatar={false} logos={[Logo, LogoIcon]} />


				<MenuPanel>
					{
						/* No Tabs demos */
					}
					<MenuNoTabs route='/' exact>
						Home Demo <br />Last help ID: {this.state.helpID}
					</MenuNoTabs>
					<MenuNoTabs route='/home' label='Menu with no tabs' icon='home'>
						No tabs workspace
					</MenuNoTabs>
					{/* 
						End Region
					*/}

					{ /* 
						Workspace with Children and help id's 
					*/}
					<Menu icon={'people'} route='/children_menu' label={'Menu with children'} >
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
								{<iframe title={'phone'} width="560" height="315" src="https://www.youtube.com/embed/EVBsypHzF3U?start=170" frameBorder="0" allowFullScreen></iframe>}
							</Workspace>
						</Tab>
					</Menu>
					{/* 
						End Region
					*/}

					{/* 
						Workspace with props as workspace. 
						How can we include help when using this pattern?
					*/}
					<Menu icon={'tab'} route='/menu2' label={'Menu with prop'}>
						<Tab label={'React Component'} route={'/react-component'} workspace={ReactComp} />
						<Tab label={'SimpleDiv'} icon={'phone'} route={'/simple-div'} workspace={SimpleDiv} />
						<Tab label={'No help'} icon={'assignment'} route={'/no-help'} workspace={SimpleDiv} helpID={4}/>
					</Menu>
					{/* 
						End Region
					*/}
				</MenuPanel>

				<Footer helpId={this.state.helpID} />
			</AppContainer>
		)
	}
}

export default App