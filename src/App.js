import React, { Component } from 'react'
import AppContainer from 'components/AppContainer/AppContainer'
import Header from 'components/Header/Header'
import MenuPanel from 'components/Menu/MenuPanel'
import Menu from 'components/Menu/Menu'
import Tab from 'components/Tabs/Tab'
import Footer from 'components/Footer/Footer'
import Page from 'components/Menu/Page'
import { Button } from 'odeum-ui'
import { Link } from 'react-router-dom'

/* Demo */

import ReactComp from 'demos/ReactComp'
import { SimpleDiv } from 'demos/SimpleDiv'
import RouteDemo from 'demos/RouteDemo'
import redTheme from 'theme/redTheme'
import greenTheme from 'theme/greenTheme'
import eplanTheme from 'theme/eplanTheme'
import theme from 'theme/default'
import Tabb from './demos/Tabb'
import Flex from './demos/Flex'

/* End Import Demo */

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			theme: theme
		}

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


	render() {
		return (
			<AppContainer theme={this.state.theme} >
				<Header logo={this.state.theme.logo} />
				<MenuPanel>
					<Page route={'/'} helpID={10}>
						{/* <Button label={'Change Theme'} onClick={this.changeTheme}>Change Theme</Button> */}
						{/* <SimpleDiv /> */}
						<Flex />
					</Page>
					<Menu route={'/home'} label={'Menu with no tabs'} icon={'home'} helpID={10}>
						<Tabb />
						<ReactComp />
						<SimpleDiv />
					</Menu>
					<Menu route={'/form'} label={'Form'}>
						<Tab route={''} label={'Test'} helpID={2}>
							Test
						</Tab>
						<Tab route={'/test2'} label={'Test2'} helpID={3}>
							Test2
						</Tab>
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
					<Menu label={'Auto Generated'}>
						<Tab label={'Route'} helpID={'0'}>
							Auto Generated Route
						</Tab>
					</Menu>
					<Menu label={'Theme'} icon={'opacity'}>
						<Tab icon={'tab'} label={'Theme'} route={'/themetab'}>
							<div style={{ display: 'flex', flexFlow: 'column' }}>
								<div>Click the button below continously to change the theme of the framework.</div>
								<Button
									label={'Change Theme'}
									icon={'opacity'}
									color={this.state.theme.menu.background}
									onClick={this.changeTheme}
								/>
								<Link to={'/'}>Route Home</Link>
								<Link to={'/child/overflow'}>Route Child</Link>
								<Link to={'/auto-generated/route'}>Route Auto-Generated</Link>
								<Link to={'/children1/workspace1'}>Route With Tabs, Third Tab</Link>
							</div>
						</Tab>
					</Menu>
					{/* 					
					Todo: Create defaultprops for Menu and Tab so they can be used without any props (label, icon, ...)
					*/}

				</MenuPanel>
				<Footer label={RenderFooterLabel} labelLink={handleLink()} helpLabel={'Brug for Hjaelp?'} />
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

