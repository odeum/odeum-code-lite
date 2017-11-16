import React, { Component } from 'react'
import AppContainer from 'components/AppContainer/AppContainer'
import Header from 'components/Header/Header'
import MenuPanel from 'components/Menu/MenuPanel'
import Menu from 'components/Menu/Menu'
import Tab from 'components/Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'
import Footer from 'components/Footer/Footer'
import { Button } from 'odeum-ui'

/* Demo */
import ReactComp from 'demos/ReactComp'
import { SimpleDiv } from 'demos/SimpleDiv'
import RouteDemo from 'demos/RouteDemo'
import redTheme from 'theme/redTheme'
import greenTheme from 'theme/greenTheme'
import eplanTheme from 'theme/eplanTheme'
import theme from 'theme/default'

class App extends Component {

	/*Temporary Help Demo */

	constructor(props) {
		super(props)

		this.state = {
			helpID: 0,
			theme: eplanTheme
		}
		Workspace.defaultProps = {
			SetHelpID: this.SetHelpID
		}
		Menu.defaultProps = {
			SetHelpID: this.SetHelpID,
			icon: 'menu'
		}

		Tab.defaultProps = {
			SetHelpID: this.SetHelpID,
			label: 'Tab',
			icon: 'tab'
		}

	}

	SetHelpID = (helpID) => {
		// console.log(helpID)
		return helpID === this.state.helpID ? null : this.setState({ helpID: helpID })
	}
	changeTheme = () => {
		return this.state.theme === eplanTheme ?
			this.setState({ theme: greenTheme }) :
			this.state.theme === greenTheme ?
				this.setState({ theme: redTheme }) :
				this.state.theme === redTheme ?
					this.setState({ theme: theme }) :
					this.state.theme === theme ?
						this.setState({ theme: eplanTheme }) :
						this.setState({ theme: eplanTheme })
	}
	/*End TempDemo */

	render() {
		return (
			<AppContainer theme={this.state.theme} >
				{/* 
				Todo: Use default theme transparently and include theme prop in AppContainer that overwrites default theme
				*/}
				<Header logo={this.state.theme.logo} />
				<MenuPanel>
					<Menu route={'/'} exact helpID={10}>
						<Button label={'Change Theme'} onClick={this.changeTheme}>Change Theme</Button>
						<SimpleDiv />
					</Menu>
					<Menu route={'/home'} label={'Menu with no tabs'} icon={'home'} helpID={10}>
						<ReactComp />
						<SimpleDiv />
					</Menu>

					<Menu icon={'people'} route={'/child'} label={'Menu with one Tab and a Route Demo'} >
						<Tab icon={'assignment'} label={'Overflow'}  >
							<RouteDemo />
						</Tab>
					</Menu>
					<Menu icon={'people'} route={'/children1'} label={'Menu with children'}>
						<Tab icon={'assignment'} label={'Overflow'} helpID={104}>
							<SimpleDiv />
						</Tab>
						<Tab icon={'assignment_turned_in'} label={'Lady Gaga'} route={'/react-component1'} helpID={12}>
							<ReactComp helpID={2} />
						</Tab>
						<Tab icon={'visibility'} label={'Hello workspace'} route={'/workspace1'} helpID={13}>
							<div>Hello Workspace ... </div>
						</Tab>
					</Menu>
					<Menu label={'Auto Generated'} helpID={'auto'}>
						<Tab label={'Route'}>
							Auto Generated Route
						</Tab>
					</Menu>
					<Menu label={'Theme'} icon={'opacity'}>
						<Tab icon={'tab'} label={'Theme'} route={'/themetab'}>
							<div>Click the button below continously to change the theme of the framework.</div>
							<Button
								label={'Change Theme'}
								icon={'opacity'}
								color={this.state.theme.menu.background}
								onClick={this.changeTheme}
							/>
						</Tab>
					</Menu>
					{/* 					
					Todo: Create defaultprops for Menu and Tab so they can be used without any props (label, icon, ...)
					*/}

				</MenuPanel>
				<Footer label={RenderFooterLabel} labelLink={handleLink()} helpID={this.state.helpID} />
			</AppContainer>
		)
	}
}

const handleLink = () => {
	return '/children_menu/workspace'
}

const RenderFooterLabel = () => {
	const date = new Date()
	return (
		<div>
			<strong>ODEUM Code Lite </strong> v1.0.0 © Copyright
			{' '}{date.getFullYear()}
		</div>
	)
}

export default App

