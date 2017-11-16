import React, { Component } from 'react'
import { QuickNavButton, QuickNavMenu } from './QuickNavigationStyles'


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
					<QuickNavButton onClick={this.openNav}>Close Navigation</QuickNavButton>
				</QuickNavMenu>
			</div >



		)
	}
}
