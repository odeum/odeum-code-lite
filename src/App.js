import React, { Component } from 'react'
import AppContainer from 'components/AppContainer/AppContainer'
import Header from 'components/Header/Header'
import MenuPanel from 'components/Menu/MenuPanel'
import Menu from 'components/Menu/Menu'
import Tab from 'components/Tabs/Tab'
import Footer from 'components/Footer/Footer'
// import Page from 'components/Menu/Page'
import Protected from 'components/Login/Protected'
import { Button } from 'odeum-ui'
import { Link } from 'react-router-dom'
import /* Login, */ LoginForm/* , { LoginCustomForm } */ from 'components/Login/Login'
/* Demo */
import Editor from './demos/Help/Editor'
import ReactComp from 'demos/ReactComp'
import { SimpleDiv } from 'demos/SimpleDiv'
import RouteDemo from 'demos/RouteDemo'
import redTheme from 'theme/redTheme'
import greenTheme from 'theme/greenTheme'
import eplanTheme from 'theme/eplanTheme'
import theme from 'theme/default'
import Tabb from './demos/Tabb'
import Flex from './demos/Flex'
// import CustomLoginForm from 'demos/CustomLoginForm'
import CurrentWeather from 'demos/CurrentWeather'
import { SetAppID } from 'components/utils/HelpReducer'
// import MinFo from 'theme/minforetning'
/* End Import Demo */

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			theme: theme,
			loggedIn: false,

		}

	}
	componentWillMount = () => {
		SetAppID('odeum-code-lite')
		var loginStorage = localStorage.getItem('loggedIn') === 'true' ? true : false
		this.setState({ loggedIn: loginStorage })
	}

	login = (username, password) => {
		localStorage.setItem('loggedIn', true)
		this.setState({ loggedIn: true })
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

	renderHeader = () => {
		return <div style={{ align: 'left' }}>Hello World ... </div>
	}

	render() {
		return (
			<AppContainer theme={this.state.theme}>
				<Header logo={this.state.theme.logo} render={this.renderHeader} />
				{/* <Flex/> */}
				{/* </Header> */}
				<MenuPanel
					login={true}
					redirectTo={'/login'}
					isLoggedIn={this.state.loggedIn}
					arrows={false}
					quickNavigation={false}
					onMenuClickClose={true}
				>
					{/* {LoginCustomForm(this.state.loggedIn, () => <CustomLoginForm login={this.login} />)} */}
					{LoginForm(this.state.loggedIn, this.login)}
					{/* {Login({ isLoggedIn: this.state.loggedIn, login: this.login, Component: () => <CustomLoginForm login={this.login}/> })} */}

					<Menu route={'/'} helpID={'root'}>
						<Flex />
					</Menu>
					{/* <Flex top/> */}
					{/* <Menu route={'/top-menu-item'} label={'Top Menu Route'} top>
						<SimpleDiv />
					</Menu> */}

					<Menu route={'/home/10'} label={'Menu with no tabs'} icon={'home'} helpID={'home'}>
						<Tabb />
						<ReactComp />
						<SimpleDiv />
					</Menu>

					<Menu route={'/help-editor'} label={'Help'} icon={'help'}>
						<Tab route={''}>
							<div/>
						</Tab>
						<Tab label={'Add Article'} route={'/new-help-article'}>
							<Editor />
						</Tab>
					</Menu>
					<Protected>
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
									<Link to={'/home'}>Route Home</Link>
									<Link to={'/404'}>404</Link>
									<Link to={'/auto-generated/route'}>Route Auto-Generated</Link>
									<Link to={'/child/overflow/routedemo'}>Route Dynamic</Link>
									<Link to={'/top-menu-item'}>Top Menu Item</Link>
									<Link to={'/menu-with-2-tabs/tab2'}>Menu with Tabs - Tab 2</Link>
								</div>
							</Tab>
						</Menu>
						<Menu route={'/page'} label={'Protected Page'} icon={'home'} helpID={'home'}>
							<Tabb />
							<ReactComp />
							<SimpleDiv />
						</Menu>
						<Menu label={'Menu with 2 tabs'} >
							<Tab route={'/tab1'} label={'Test1'} helpID={'/Form'}>
								<div>

									<SimpleDiv />
									<Flex />
								</div>
							</Tab>
							<Tab route={'/tab2'} label={'Test2'} helpID={'Test2'}>
								<Tabb />
								<ReactComp />
								<SimpleDiv />
								<Flex />
							</Tab>
						</Menu>
						<Menu icon={'people'} route={'/child'} label={'Menu w/ nested route'} >
							<Tab icon={'assignment'} label={'Overflow'} helpID={'Overflow'} >
								<RouteDemo />
							</Tab>
						</Menu>
						<Menu label={'Auto Generated'}>
							<Tab label={'Route'}>
								<div>Auto Generated Route</div>
							</Tab>
						</Menu>
						<Menu icon={'drafts'} label={'I have help'}>
							<ReactComp />
						</Menu>
						<Menu label={'Weather'} icon='people'>
							<CurrentWeather/>
						</Menu>
					</Protected>
					{/* <Flex bottom/> */}
				</MenuPanel>
				<Footer help={true} /* label={RenderFooterLabel} labelLink={handleLink()} helpLabel={'Brug for Hjaelp?'}  */ />
			</AppContainer>
		)
	}
}

// const handleLink = () => {
// 	return '/children_menu/workspace'
// }

// const RenderFooterLabel = () => {
// 	const date = new Date()
// 	return (
// 		<div>
// 			<strong>ODEUM Code Lite </strong> v1.0.0 © Copyright
// 			{' '}{date.getFullYear()}
// 			{/* {' Debug2 '}{GetHelpID()} */}
// 		</div>
// 	)
// }

export default App

// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update')
// 	whyDidYouUpdate(React, { groupByComponent: true, collapseComponentGroups: true })
// }
