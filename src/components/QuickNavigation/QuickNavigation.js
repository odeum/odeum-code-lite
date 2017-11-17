import React, { Component } from 'react'
import {
	QuickNavButton, QuickNavMenu,
	Spacer, TabList, TabItem,
	MenuItem, MenuList
} from './QuickNavigationStyles'


export default class QuickNavigation extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quickNav: false,
			showButton: true,
		}
	}

	openNav = () => {
		this.setState({ quickNav: !this.state.quickNav })
	}
	render() {
		const { quickNav } = this.state
		return (

			<div style={{ zIndex: '1', display: 'flex', flexFlow: 'column' }}>
				<QuickNavButton onClick={this.openNav}>Quick Navigation</QuickNavButton>
				<QuickNavMenu quickNav={quickNav}>
					<button onClick={this.openNav}>X</button>
					<Spacer />
					<TabList>
						<TabItem>Tab 1</TabItem>
						<TabItem>SomeVeryLongNameTab</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
						<TabItem>Tab 1</TabItem>
					</TabList>
					<Spacer />
					<MenuList>
						<MenuItem>Tab 1</MenuItem>
						<MenuItem>Tab 1</MenuItem>
						<MenuItem>Tab 1</MenuItem>
						<MenuItem>Tab 1</MenuItem>
						<MenuItem>Tab 1</MenuItem>
						<MenuItem>Tab 1</MenuItem>
						<MenuItem>Tab 1</MenuItem>
						<MenuItem>Tab 1</MenuItem>
						<MenuItem>Tab 1</MenuItem>
					</MenuList>
				</QuickNavMenu>
			</div >



		)
	}
}
