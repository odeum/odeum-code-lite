import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { TabList, SceneDiv } from '../Tabs/TabStyles'
import Tab from '../Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'
export default class TabContainer extends Component {
	renderChildren = () => this.props.children.map((child, i) => {
		return <Route key={i} path={this.props.route + child.props.route} component={this.renderChild(child)} />
	})
	renderChild = (child) => child.props.children ? () => child.props.children : child.props.workspace ? () => <Workspace>{React.createElement(child.props.workspace)}</Workspace> : null
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
				{this.renderChildren()}

			</SceneDiv>
		)
	}
}
