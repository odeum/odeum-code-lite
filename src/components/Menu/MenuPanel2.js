import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MenuItem from './MenuComponents/MenuItem'
import MenuDiv from "./MenuComponents/MenuDiv"
import { MenuContainer } from './MenuStyles'
import { Switch } from 'react-router-dom'
import NotFound from '../AppContainer/NotFound'
import QuickNavigation from 'components/QuickNavigation/QuickNavigation'
import { convertLabelToRoute, isExact } from '../utils/Functions'
import { ScreenSizes as sizes } from '../../theme/media'
import Tab from 'components/Tabs/Tab'

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
		// console.log('MenuDiv', 'resized')s
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
	//TODO
	route = (child) => {
		if (child.type.name === 'Protected') {
			return child.children
		} else return child.props.route ? child.props.route : convertLabelToRoute(child.props.label)
	}
	//TODO
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
	setActiveMenu = (key) => {
		// console.log('ActiveMenu', key)
		this.setState({ activeMenu: key })
	}

	//#endregion

	//#region Rendering

	renderChild = (child, index) => ({ match }) => { return React.cloneElement(child, { ...child.props, quicknav: this.state.quicknav, setActiveMenu: this.setActiveMenu, index: index, activeMenu: this.state.activeMenu, route: this.route(child) }) }
	renderMenu = (children) => {
		return <MenuContainer quicknav={this.state.quicknav}>
			{!this.state.quicknav ? <MenuDiv quicknav={this.switch}>
				{children.map((child, index) => {
					if (child.type.name === 'Protected' && !child.props.isProtected) {
						console.log('Entering non-protected area ...')
						console.log(child.props.children.props.label)
						return (
							
							/*
 							<MenuItem 
								key={index} 
								label={ child.props.children.props.label }
								route={this.route(child.props.children) + this.getFirstChildRoute(child.props.children)}
								onClick={this.setActiveMenu} 
							/> 
							*/
							<div key={index}>
								 Hello
							</div>
							
						)						
					} else return (child.props.label ?
						<MenuItem 
							key={index}
							SetHelpID={this.props.SetHelpID}
							MenuID={index}
							helpID={child.props.helpID}
							active={this.state.activeMenu === (index) ? true : false}
							icon={child.props.icon}
							label={child.props.label}
							route={this.route(child) + this.getFirstChildRoute(child)}
							onClick={this.setActiveMenu} 
						/> : null
					)
				})}
			</MenuDiv> : <QuickNavigation menus={children} />}
			<Switch>
				{children.map((child, i) => {
					return <Route key={i} path={this.route(child)} exact={isExact(this.route(child))} route={this.route(child)} component={this.renderChild(child, i)} />
				})}
				<Route path={'*'} component={NotFound} />
			</Switch>
		</MenuContainer>
	}

	render() {
		return this.renderMenu(React.Children.toArray(this.props.children))
	}

	//#endregion
}

export default MenuPanel