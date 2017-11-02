import React, { Component } from 'react'
import { TabList, SceneDiv } from './TabStyles'
import { Route } from 'react-router-dom'
import Tab from './Tab'
export default class TabContainer extends Component {
	render() {
		return (
			<SceneDiv>
				<TabList>
					{this.props.children.map((child, i) => (
						<Tab key={i}
							active={window.location.pathname.includes(child.props.route) ? true : false}
							label={child.props.label}
							route={this.props.route + child.props.route} />
					))}
				</TabList>
				{this.props.children.map((child, i) => {
					const renderChild = () => child.props.children

					return <Route path={this.props.route + child.props.route} key={i} component={renderChild} />
				})}

			</SceneDiv>
		)
	}
}
