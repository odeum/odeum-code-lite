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
				<Header/>
				<MenuPanel>
					{
						/* No Tabs demos */
					}
					<Menu route={'/'} exact>
						Home Demo <br />Last help ID: {this.state.helpID}
					</Menu>

					<Menu route={'/home'} label={'Menu with no tabs'} icon={'home'}>
						No tabs workspace
					</Menu>
					{ /* 
						Workspace with Children and help id's 
					*/}
					<Menu icon={'people'} route={'/children_menu'} label={'Menu with children'}>
						<Tab icon={'assignment'} label={'Overflow'} route={'/overflow'}>
							<Workspace helpID={1}>
								<SimpleDiv/>
							</Workspace>
						</Tab>
						<Tab icon={'assignment_turned_in'} label={'Lady Gaga'} route={'/react-component'}>
							<ReactComp helpID={2} />
						</Tab>
						<Tab icon={'visibility'} label={'Hello workspace'} route={'/workspace'}>
							<Workspace helpID={3}>
								{<div>Hello Workspace ... </div>}
							</Workspace>
						</Tab>
					</Menu>
					{/* 					
					Todo: Create defaultprops for Menu and Tab so they can be used without any props (label, icon, ...)
					Todo: Fix Menu/MenuPanel so you can settle for only 1 tab
					Workspace rendered from props
					*/}

					<Menu icon={'tab'} route={'/menu2'} label={'Menu with prop'}>
						<Tab label={'React Component'} workspace={ReactComp} />
						<Tab label={'SimpleDiv'} icon={'phone'} route={'/simple-div'} workspace={SimpleDiv}/>
						<Tab label={'No help'} icon={'assignment'} workspace={SimpleDiv} helpID={5} />
					</Menu>

					<Menu icon={'menu'} route={'/tabmenu'} label={'Menu with tabs'}>
						<Tab route={'/tab1'} workspace={ReactComp}>
						</Tab>
						<Tab route={'/tab2'} workspace={SimpleDiv}>
						</Tab>
					</Menu>

				</MenuPanel>
				<Footer label={renderFooterLabel} labelLink={handleLink()} debug={String(this.state.helpID)}/>
			</AppContainer>
		)
	}
}

const handleLink = () => {
	return '/children_menu/workspace'
}

const renderFooterLabel = () => {
	const date = new Date()
	return (
		<div>
			<strong>ODEUM Code Lite </strong> v1.0.0 © Copyright{' '}{date.getFullYear()}{' -  '}
		</div>
	)
}

export default App

