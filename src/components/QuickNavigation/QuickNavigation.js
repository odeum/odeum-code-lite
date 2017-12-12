import React, { Component } from 'react'
import {
	QuickNavButton, QuickNavMenu, QuickNavContainer, QuickNav,
	Spacer, TabList, TabItem,
	MenuItem, MenuList, Link, Header, SubHeader
} from './QuickNavigationStyles'
// import { NavLink } from 'react-router-dom'
import Tab from '../Tabs/Tab'
import { convertLabelToRoute } from '../utils/Functions'
import { Icon } from 'odeum-ui'
import HeaderButton from './HeaderButton'


export default class QuickNavigation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quickNav: true,
			showButton: true,
			activeMenu: 0,
			activeTab: {
				tab: 0,
				menu: 0
			}
		}
	}

	tabClick = (e) => {

		var activeTab = { tab: parseInt(e.target.id, 10), menu: this.state.activeMenu }
		this.setState({ quickNav: false, activeTab: activeTab })
	}

	menuClick = () => (e) => {
		e.stopPropagation()
	}

	setActiveMenu = (index, closeNav) => (e) => {
		e.preventDefault()
		e.stopPropagation()
		this.setState({ activeMenu: index, quickNav: !closeNav })
	}

	openNav = (e) => {
		e.stopPropagation()		
		this.setState({ quickNav: !this.state.quickNav })
	}

	activeTab = (tab, menu) => tab === this.state.activeTab.tab && menu === this.state.activeTab.menu ? 'true' : 'false'

	renderMenuItem = (menu, index) => {
		var icon = menu.props.icon ? menu.props.icon : 'menu'
		var route = menu.props.route !== undefined ? menu.props.route : convertLabelToRoute(menu.props.label)
		console.log(route)
		if (route === '' || route === '/') {
			return <MenuItem key={index} onClick={this.setActiveMenu(index, true)}>
				<Link to={route}>
					<Icon icon={'home'} iconSize={28} style={{ marginBottom: '4px', color: 'inherit' }} />
					{'Home'}
				</Link>
			</MenuItem >
		}
		else {
			if (React.Children.toArray(menu.props.children)[0].type === Tab)

				return (<MenuItem key={index} onClick={this.setActiveMenu(index, false)}>
					<Icon icon={icon} iconSize={28} style={{ marginBottom: '4px', color: 'inherit' }} />
					{menu.props.label}
				</MenuItem>)
			else
				return <MenuItem key={index} onClick={this.setActiveMenu(index, true)}>
					<Link to={route}>
						<Icon icon={icon} iconSize={28} style={{ marginBottom: '4px', color: 'inherit' }} />
						{menu.props.label}
					</Link>
				</MenuItem >
		}
	}
	renderTabItem = (tab, menu, index) => {
		var menuRoute = menu.props.route !== undefined ? menu.props.route : convertLabelToRoute(menu.props.label)
		var route = tab.props.route !== undefined ? menuRoute + tab.props.route : menuRoute + convertLabelToRoute(tab.props.label)
		return <TabItem key={index} activetab={this.activeTab(index, this.state.activeMenu)} id={index} to={route} onClick={this.tabClick}>{tab.props.label ? tab.props.label : tab.props.route}</TabItem>
	}
	render() {
		// console.log(this.props)
		const { quickNav } = this.state
		return (

			<QuickNav>
				<QuickNavButton onClick={this.openNav}><Icon icon={'menu'} color={'white'} iconSize={18} style={{ marginRight: '8px' }} />Quick Menu</QuickNavButton>
				<QuickNavContainer quickNav={quickNav} onClick={this.openNav}>
					<QuickNavMenu onClick={this.menuClick()}>
						<Header>
							<SubHeader>
								<HeaderButton icon={'help'} />
								<HeaderButton icon={'search'} />
							</SubHeader>
							<div style={{ alignSelf: 'center', justifyContent: 'center' }}>
								Quick Navigation
							</div>
							<HeaderButton icon={'close'} onClick={this.openNav} />
						</Header>
						<Spacer />

						<TabList tabs={React.Children.toArray(this.props.menus[this.state.activeMenu].props.children).length}>
							{React.Children.toArray(this.props.menus[this.state.activeMenu].props.children).map((tab, index) =>
								tab.type === Tab ? this.renderTabItem(tab, this.props.menus[this.state.activeMenu], index) : undefined)}
						</TabList>
						<Spacer />
						<MenuList>
							{React.Children.toArray(this.props.menus).map((menu, index) =>
								this.renderMenuItem(menu, index)
							)}
						</MenuList>
					</QuickNavMenu>
				</QuickNavContainer>
			</QuickNav >



		)
	}
}
