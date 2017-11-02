import React, { Component } from 'react'
import { TabList, SceneDiv } from './TabStyles'
import { Route } from 'react-router-dom'
import Tab from './Tab'
export default class TabContainer extends Component {
	renderChild = (child) => child.props.children ? () => child.props.children : null
	render() {
		return (
			<SceneDiv>
				<TabList>
					{this.props.children.map((child, i) => (
						<Tab key={i}
							active={window.location.pathname.includes(child.props.route) ? true : false}
							label={child.props.label}
							icon={child.props.icon ? child.props.icon : this.props.icon}
							route={this.props.route + child.props.route} />
					))}
				</TabList>
				{this.props.children.map((child, i) => {
					return <Route key={i} path={this.props.route + child.props.route} component={this.renderChild(child)} />
				})}

			</SceneDiv>
		)
	}
}
