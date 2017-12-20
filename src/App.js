import React, { Component } from 'react'
import AppContainer from 'components/AppContainer/AppContainer'
import Header from 'components/Header/Header'
import MenuPanel from 'components/Menu/MenuPanel3'
import Menu from 'components/Menu/Menu'
import Tab from 'components/Tabs/Tab'
import Footer from 'components/Footer/Footer'
import Page from 'components/Menu/Page'
// import Protected from 'components/Login/Protected'
import { Button } from 'odeum-ui'
import { Link } from 'react-router-dom'
import Login from 'components/Login/Login'
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
import { Redirect } from 'react-router-dom'

/* End Import Demo */

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			theme: theme,
			loggedIn: false,
			redirected: false //temporary PoC, will change after a better solution "reveals itself"
		}

	}
	login = () => {
		this.setState({ loggedIn: !this.state.loggedIn })
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

	loginRender() {
		if (!this.state.loggedIn)
			return ( 					
				<MenuPanel>
					<Page route={'/'} exact={false}>
			 <Redirect to={'/login'}/>
					</Page>
					<Page route={'/login'}>
						<Login login={this.login}> Login</Login>
					</Page>
				</MenuPanel>)
	}
	redirectTo() {
		if (!this.state.redirected)
		{this.setState({ redirected: true })
			return <Redirect to={'/'}/>}
	}
	render() {

		return (
			<AppContainer theme={this.state.theme} >
				<Header logo={this.state.theme.logo} />
				{this.loginRender()}
				{this.state.loggedIn && !this.state.redirected ? 
				 <MenuPanel>
						<Page route={'/'} helpID={'root'}>
							{/* <Button label={'Change Theme'} onClick={this.changeTheme}>Change Theme</Button> */}
							{/* <SimpleDiv /> */}
							<Flex />
						</Page>
						<Menu route={'/home'} label={'Menu with no tabs'} icon={'home'} helpID={'home'}>
							<Tabb />
							<ReactComp />
							<SimpleDiv />
						</Menu>
						<Menu route={'/form'} label={'Form'}>
							<Tab route={''} label={'Test1'} helpID={'/Form'}>
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
							</Tab>
							<Tab route={'/test2'} label={'Test2'} helpID={'Test2'}>
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
							</Tab>
						</Menu>
						<Menu icon={'people'} route={'/child'} label={'Menu with one Tab and a Route Demo'} >
							<Tab icon={'assignment'} label={'Overflow'} helpID={'Overflow'} >
								<RouteDemo />
							</Tab>
						</Menu>

						{/* 		<Protected isProtected={false}> */}
						<Menu label={'Protected menu'} icon={'lock_outline'} route={'/children1'} >
							<Tab label={'Overflow'} icon={'assignment'} helpID={'/ch/overflow'}>
								<SimpleDiv />
							</Tab>
							<Tab label={'Lady Gaga'} icon={'assignment_turned_in'} route={'/react-component1'} helpID={7}>
								<ReactComp />
							</Tab>
							<Tab label={'Hello workspace'} icon={'visibility'} route={'/workspace1'} helpID={8}>
								<div>Hello Protected Workspace ... </div>
							</Tab>
						</Menu>
						{/* </Protected>
						*/}
						<Menu label={'Auto Generated'}>
							<Tab label={'Route'} helpID={'9'}>
							Auto Generated Route
							</Tab>
						</Menu>
						<Menu label={'Theme'} icon={'opacity'}>
							<Tab icon={'tab'} label={'Theme'} route={'/themetab'} helpID={10}>
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
						</Menu></MenuPanel> : <Redirect to={'/login'}/>}
			

				}
				
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
			{/* {' Debug2 '}{GetHelpID()} */}
		</div>
	)
}

export default App

