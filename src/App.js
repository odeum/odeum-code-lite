import React, { Component } from 'react'
import AppContainer from 'components/AppContainer/AppContainer'
import Header from 'components/Header/Header'
import MenuPanel from 'components/Menu/MenuPanel'
import Menu from 'components/Menu/Menu'
import Tab from 'components/Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'
import Footer from 'components/Footer/Footer'


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

	}

	SetHelpID = (helpID) => {
		return helpID === this.state.helpID ? null : this.setState({ helpID: helpID })
	}

	render() {
		return (
			<AppContainer>
				{/* 
				Todo: Use default theme transparently and include theme prop in AppContainer that overwrites default theme
				Todo: Remove all inline styles and use styled-components ...
				*/}
				<Header />


				<MenuPanel>
					{
						/* No Tabs demos */
					}
					<Menu route='/' exact>
						Home Demo <br />Last help ID: {this.state.helpID}
					</Menu>

					<Menu route='/home' label='Menu with no tabs' icon='home'>
						No tabs workspace
					</Menu>
					{/* 
						End Region
					*/}

					{ /* 
						Workspace with Children and help id's 
					*/}
					<Menu icon={'people'} route='/children_menu' label={'Menu with children'} >
						<Tab icon={'assignment'} label={'Overflow Test'} route={'/lorem_ipsum'} >
							<Workspace helpID={1}>
								<SimpleDiv />
							</Workspace>
						</Tab>
						<Tab icon={'assignment_turned_in'} label={'Subtab'} route={'/react-component'}>
							<ReactComp />
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
						Todo: If no route is transfered then create dummy route from lowercase label
						Function to create route from label or defaultLabel 
						Todo: Create defaultprops for Menu and Tab so they can be used without any props (label, icon, ...)
					*/}
					<Menu icon={'tab'} route='/menu2' label={'Menu with prop'}>
						<Tab label={'React Component'} route={'/react-component'} workspace={ReactComp} />
						<Tab label={'SimpleDiv'} icon={'phone'} route={'/simple-div'} workspace={SimpleDiv} />
						<Tab label={'No help'} icon={'assignment'} route={'/no-help'} workspace={SimpleDiv} helpID={4} />
					</Menu>
					{/* 
						End Region
					*/}
				</MenuPanel>
				{/* Render FooterLabel + Link 
				label={renderFooterLabel} labellink={handleLink} help={true}
				*/}
				<Footer helpId={this.state.helpID} />
			</AppContainer>
		)
	}
}

export default App
