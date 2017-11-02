import React, { Component } from 'react'
import { MenuDiv, MenuHeader, IconDiv } from './MenuStyles'
// import media from 'themes/media'
import { Route } from 'react-router-dom'
import MenuItem from './MenuItem'
import { Icon } from 'odeum-ui'
export default class MenuPanel extends Component {
	sizes = {
		giant: 1170,
		desktop: 992,
		tablet: 768,
		phone: 376
	}
	constructor(props) {
		super(props)
		this.state = { achordeon: true, disableMenuAchordeon: false }
	}

	componentDidMount() {
		this.updateWindowDimensions()
		window.addEventListener('resize', this.updateWindowDimensions)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

	updateWindowDimensions = () => {
		if (window.innerWidth < this.sizes.tablet && !this.state.disableMenuAchordeon) {
			this.setState({ achordeon: false, disableMenuAchordeon: true })
		}
		else if (window.innerWidth >= this.sizes.tablet && this.state.disableMenuAchordeon) {
			this.setState({ disableMenuAchordeon: false })
		}
	}
	switch = () => (
		this.setState({ achordeon: !this.state.achordeon })
	)
	routingTest = (child) => child.props.children ? child.props.children[0].props ? child.props.children[0].props.route : '' : ''
	renderChild = (child) => () => child
	render() {
		const { disableMenuAchordeon, achordeon } = this.state
		return (
			<div style={{ display: 'flex', flexFlow: 'row nowrap', flex: 1 }}>
				<MenuDiv achordeon={achordeon}>
					<MenuHeader>
						<IconDiv onClick={!disableMenuAchordeon ? this.switch : null}
							style={{ cursor: 'pointer' }}>
							<Icon icon={'menu'} iconSize={20} color={'white'} style={{ marginRight: '0px' }} />
						</IconDiv>
					</MenuHeader>
					{this.props.children.map((child, i) => (
						<MenuItem key={i}
							active={window.location.pathname.includes(child.props.route) ? true : false}
							icon={child.props.icon}
							label={child.props.label}
							route={child.props.route + this.routingTest(child)} />
					))}

				</MenuDiv>
				{this.props.children.map((child, i) =>
					<Route path={child.props.route} route={child.props.route} key={i} component={this.renderChild(child)} />
				)
				}
			</div >
		)
	}
}
