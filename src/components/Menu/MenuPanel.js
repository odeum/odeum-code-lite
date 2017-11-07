import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MenuItem from './MenuComponents/MenuItem'
import MenuDiv from "./MenuComponents/MenuDiv"
import { MenuContainer } from './MenuStyles'
class MenuPanel extends Component {
	convertLabelToRoute = (child) => {
		console.log(child.props.children)
		var route = child.props.children[0].props.label.replace(/\s+/g, '-').toLowerCase()
		route = '/' + route
		console.log('---route---')
		console.log(route)
		return route
	}
	constructor(props) {
		super(props)
		this.state = { achordeon: true, disableMenuAchordeon: false }
	}

	switch = () => (
		this.setState({ achordeon: !this.state.achordeon })
	)

	childHasRoute = (child) => child.props.children ? child.props.children[0].props ? child.props.children[0].props.route ? child.props.children[0].props.route : this.convertLabelToRoute(child) : '' : ''
	renderChild = (child) => () => child

	render() {
		return (
			<MenuContainer>
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
			</MenuContainer>
		)
	}
}

export default MenuPanel