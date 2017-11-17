import React, { Component } from 'react'
import {
	QuickNavButton, QuickNavMenu, QuickNavContainer,
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
	menuClick = () => (e) => {
		e.stopPropagation()
		console.log('bing')
	}
	openNav = () => {
		this.setState({ quickNav: !this.state.quickNav })
	}
	render() {
		const { quickNav } = this.state
		return (

			<div style={{ zIndex: '1', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'center' }}>
				<QuickNavButton onClick={this.openNav}>Quick Navigation</QuickNavButton>
				<QuickNavContainer quickNav={quickNav} onClick={this.openNav}>
					<QuickNavMenu onClick={this.menuClick()}>
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
				</QuickNavContainer>
			</div >



		)
	}
}
