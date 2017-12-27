import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MenuItem from './MenuComponents/MenuItem'
import MenuDiv from "./MenuComponents/MenuDiv"
// import { MenuContainer } from './MenuStyles'
import NotFound from '../AppContainer/NotFound'
import QuickNavigation from 'components/QuickNavigation/QuickNavigation'
import { convertLabelToRoute, isExact } from '../utils/Functions'
import { ScreenSizes as sizes } from '../../theme/media'
import Tab from 'components/Tabs/Tab'
import { Redirect } from 'react-router-dom'
import Protected from 'components/Login/Protected'

class MenuPanel extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quicknav: false,
			disableMenuAchordeon: false,
			activeMenu: 0
		}
	}
	componentWillMount = () => {
		this.updateWindowSize()
		window.addEventListener('resize', this.updateWindowSize)
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateWindowSize)
	}

	//#region Display quickNav or Menu 
	
	updateWindowSize = () => {
		if (window.innerWidth < sizes.tablet)
			//QuickNav on
			this.setState({
				quicknav: true
			})
		if (window.innerWidth >= sizes.tablet)
			this.setState({
				quicknav: false
			})

	}
	//#endregion 

	//#region Routing + Get First Child Route 

	route = (child) => child.props.route ? child.props.route : convertLabelToRoute(child.props.label)

	getFirstChildRoute = (child) => {
		var children = React.Children.toArray(child.props.children)
		if (children[0].type === Tab) {
			if (children[0].props.route !== undefined)
				return children[0].props.route
			else {
				if (children[0].props.label)
					return convertLabelToRoute(children[0].props.label)
				else
					return ''
			}
		} else
			return ''
	}

	convertChildLabelToRoute = (child) => {
		var route = ''
		var children = React.Children.toArray(child.props.children)
		if (children[0].props.label)
			route = convertLabelToRoute(children[0].props.label)
		return route
	}
	//#endregion

	//#region State Management

	switch = (bool) => (
		this.setState({ quicknav: bool })
	)
	setActiveMenu = (label, id) => {
		console.log('Setting as active', label, id)
		this.setState({ activeMenu: label })
	}

	//#endregion

	//#region Rendering

	renderChild = (child, index) => ({ match }) => { return React.cloneElement(child, { ...child.props, quicknav: this.state.quicknav, setActiveMenu: this.setActiveMenu, activeMenu: this.state.activeMenu, route: this.route(child) }) }

	renderPublic = (children) => {
		return <React.Fragment /* quicknav={this.state.quicknav} */>
			{!this.state.quicknav ? <MenuDiv quicknav={this.switch}>
				{children.map((child, index) => {
					if (child.type === Protected)
						return null
					else
						return (child.props.label ?
							<MenuItem key={index}
								MenuID={index}
								helpID={child.props.helpID}
								active={this.state.activeMenu === (index) ? true : false}
								icon={child.props.icon}
								label={child.props.label}
								route={this.route(child) + this.getFirstChildRoute(child)}
								onClick={this.setActiveMenu} /> : null
						)
				})}
			</MenuDiv> : <QuickNavigation menus={children} loggedIn={this.props.isLoggedIn}/>}
			<Switch>
				{children.map((child, i) => {
					if (child.type !== Protected)
						return <Route key={i} path={this.route(child)} exact={child.props.exact ? child.props.exact : isExact(this.route(child))} route={this.route(child)} component={this.renderChild(child, i)} />
					else
						return null
				})}
				<Route path={'*'} render={this.props.isLoggedIn ? () => NotFound : () => <Redirect to={this.props.redirectTo}/>} />
			</Switch>
		</React.Fragment>
	}
	renderMenu = (children) => {
		return <React.Fragment>
			{!this.state.quicknav ? <MenuDiv quicknav={this.switch}>
				{children.map((child, index) => {
					if (child.type !== Protected)
					{ 
						return (child.props.label ?
							<MenuItem key={index}
								MenuID={index}
								helpID={child.props.helpID}
								active={this.state.activeMenu === index ? true : false}
								icon={child.props.icon}
								label={child.props.label}
								route={this.route(child) + this.getFirstChildRoute(child)}
								onClick={this.setActiveMenu} /> : null
						)}
					else {
						const childs = React.Children.toArray(child.props.children)
						return childs.map((protchild, protindex) =>
						{
							return (protchild.props.label ?
								<MenuItem key={protindex + index}
									MenuID={protindex + index}
									helpID={protchild.props.helpID}
									active={this.state.activeMenu === protindex + index ? true : false}
									icon={protchild.props.icon}
									label={protchild.props.label}
									route={this.route(protchild) + this.getFirstChildRoute(protchild)}
									onClick={this.setActiveMenu}
								/> : null
							)
						}
						)
						
					}
				})}
			</MenuDiv> : <QuickNavigation menus={children} loggedIn={this.props.isLoggedIn}/>}
			<Switch>
				{children.map((child, i) => {
					if (child.type !== Protected)
					{
						console.log(child)
						return <Route key={i} path={this.route(child)} exact={child.props.exact ? child.props.exact : isExact(this.route(child))} route={this.route(child)} component={this.renderChild(child, i)} />
					}					
					else {
						var childs = React.Children.toArray(child.props.children)
						return childs.map((child, proti) => {
							console.log(child)
							return <Route key={proti + i} path={this.route(child)} exact={child.props.exact ? child.props.exact : isExact(this.route(child))} route={this.route(child)} component={this.renderChild(child, i)} />
						})
						
					}
				})}
				<Route path={'*'} component={NotFound} />
			</Switch>
		</React.Fragment>
	}

	render() {
		
		const { login, isLoggedIn } = this.props
		console.log(isLoggedIn)
		if (!login)
		{
			return this.renderMenu(React.Children.toArray(this.props.children))
		}
		else
		{	
			if (isLoggedIn)
			{
				return this.renderMenu(React.Children.toArray(this.props.children))
			}
			
			else {
				return this.renderPublic(React.Children.toArray(this.props.children))
			}
		}
	}

	//#endregion
}

export default MenuPanel

