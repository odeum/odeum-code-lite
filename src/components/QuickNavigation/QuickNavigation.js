import React, { Component } from 'react'
import {
	QuickNavButton, QuickNavMenu, QuickNavContainer,
	Spacer, TabList, TabItem,
	MenuItem, MenuList
} from './QuickNavigationStyles'
import { NavLink } from 'react-router-dom'


//TODO:
//1. Generate Route from label
//2. Generate label from route
//3. Check for tabs => if no tabs => direct link else tabs
//4. Remove tabs when screen is small
//5. Generalize the function for label conversion in utils.js
//6. Remove inline Styling

export default class QuickNavigation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quickNav: false,
			showButton: true,
			activeMenu: 0
		}
	}
	menuClick = () => (e) => {
		e.stopPropagation()
	}
	setActiveMenu = (index) => (e) => {
		e.preventDefault()
		e.stopPropagation()
		this.setState({ activeMenu: index })
	}
	openNav = () => {
		this.setState({ quickNav: !this.state.quickNav })
	}
	render() {
		console.log(this.props)
		const { quickNav } = this.state
		return (

			<div style={{ zIndex: '1', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'center' }}>
				<QuickNavButton onClick={this.openNav}>Quick Navigation</QuickNavButton>
				<QuickNavContainer quickNav={quickNav} onClick={this.openNav}>
					<QuickNavMenu onClick={this.menuClick()}>
						<button onClick={this.openNav}>X</button>
						<Spacer />

						<TabList>
							{React.Children.toArray(this.props.menus[this.state.activeMenu].props.children).map((tab, index) => {
								return <TabItem key={index}><NavLink to={tab.props.route ? this.props.menus[this.state.activeMenu].props.route + tab.props.route : this.props.menus[this.state.activeMenu].props.route + '/' + tab.props.label}>{tab.props.label}</NavLink></TabItem>
							})
							}
						</TabList>
						<Spacer />
						<MenuList>
							{React.Children.toArray(this.props.menus).map((menu, index) =>
								<MenuItem key={index} onClick={this.setActiveMenu(index)}>{menu.props.label ? menu.props.label : menu.props.route}</MenuItem>
							)}
						</MenuList>
					</QuickNavMenu>
				</QuickNavContainer>
			</div >



		)
	}
}
