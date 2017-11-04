import React, { Component } from 'react'
// import { MenuHeader, IconDiv } from './MenuStyles'
// import media from 'themes/media'
import { Route } from 'react-router-dom'
import MenuItem from './MenuItem'
// import { Icon } from 'odeum-ui'
import MenuDiv from "./MenuComponents/MenuDiv"
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

	switch = () => (
		this.setState({ achordeon: !this.state.achordeon })
	)
	childHasRoute = (child) => child.props.children ? child.props.children[0].props ? child.props.children[0].props.route : '' : ''
	renderChild = (child) => () => child
	render() {
		return (
			<div style={{ display: 'flex', flexFlow: 'row nowrap', flex: 1, overflowY: 'hidden' }}>
				<MenuDiv>
					{this.props.children.map((child, i) => (child.props.label ?
						<MenuItem key={i}
							active={window.location.pathname.includes(child.props.route) ? true : false}
							icon={child.props.icon}
							label={child.props.label}
							route={child.props.route + this.childHasRoute(child)} /> : null
					))}

				</MenuDiv>
				{this.props.children.map((child, i) =>
					<Route path={child.props.route} exact={child.props.exact ? child.props.exact : undefined} route={child.props.route} key={i} component={this.renderChild(child)} />
				)
				}
			</div >
		)
	}
}
