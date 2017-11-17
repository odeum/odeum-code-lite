import React, { Component } from 'react'
import { MenuDiv as MenuCont, MenuHeader, IconDiv } from '../MenuStyles'
import { Icon } from 'odeum-ui'
import QuickNavigation from 'components/QuickNavigation/QuickNavigation'

export default class MenuDiv extends Component {
	constructor(props) {
		super(props)
		this.state = {
			achordeon: true,
			disableMenu: false
		}
	}
	sizes = {
		giant: 1170,
		desktop: 992,
		tablet: 768,
		phone: 376
	}

	componentDidMount() {
		this.updateWindowDimensions()
		window.addEventListener('resize', this.updateWindowDimensions)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

	updateWindowDimensions = () => {
		if (window.innerWidth < this.sizes.tablet) {
			this.setState({ achordeon: false, disableMenu: true })
			this.props.quicknav()
		}
		else if (window.innerWidth >= this.sizes.tablet ) {
			this.setState({ disableMenu: false })
			this.props.quicknav()			
		} 
	}

	switch = () => (
		this.setState({ achordeon: !this.state.achordeon })
	)
	
	render() {
		const { disableMenu } = this.state
		console.log(disableMenu)
		return (
			!disableMenu ? <MenuCont achordeon={this.state.achordeon}>
				<MenuHeader>
					<IconDiv onClick={ this.switch }
						style={{ cursor: 'pointer' }}>
						<Icon icon={'menu'} iconSize={20} color={'white'} style={{ marginRight: '0px' }} />
					</IconDiv>
				</MenuHeader>
				{this.props.children}
			</MenuCont> : <QuickNavigation/>
		)
	}
}
