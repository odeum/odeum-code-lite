import React, { Component } from 'react'
import { MenuDiv, MenuHeader } from './MenuStyles'
// import media from 'themes/media'
import { Route } from 'react-router-dom'
import MenuItem from './MenuItem'
export default class Menu extends Component {
	sizes = {
		giant: 1170,
		desktop: 992,
		tablet: 768,
		phone: 376
	}
	constructor(props) {
		super(props)
		this.state = { close: false, disableMenuAchordeon: false }
	}

	componentDidMount() {
		this.updateWindowDimensions()
		window.addEventListener('resize', this.updateWindowDimensions)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

	updateWindowDimensions = () => {
		console.log('Comparison')
		console.log(window.innerWidth < this.sizes.tablet)
		if (window.innerWidth < this.sizes.tablet) {
			this.setState({ close: true, disableMenuAchordeon: true })
		}
		else {
			this.setState({ disableMenuAchordeon: false })
		}
	}
	switch = () => (
		this.setState({ close: !this.state.close })
	)
	render() {
		const { disableMenuAchordeon, close } = this.state
		return (
			<div style={{ display: 'flex', flexFlow: 'row nowrap', flex: 1 }}>
				{!disableMenuAchordeon ? <MenuDiv>
					<MenuHeader>
						<button onClick={!disableMenuAchordeon ? this.switch : null}>M</button>
					</MenuHeader>
					{this.props.children.map((child, i) => (
						<MenuItem key={i}
							active={window.location.pathname.includes(child.props.route) ? true : false}
							label={child.props.label}
							route={child.props.route + child.props.children[0].props.route} />
					))}

				</MenuDiv> : null}
				{this.props.children.map((child, i) => {
					const renderChild = ({ match }) => {
						return child
					}
					return <Route path={child.props.route} route={child.props.route} key={i} component={renderChild} />
				})}
			</div>
		)
	}
}
