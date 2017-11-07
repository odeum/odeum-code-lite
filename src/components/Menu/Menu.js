import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { TabList, SceneDiv } from '../Tabs/TabStyles'
import Tab from '../Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'

class Menu extends Component {
	convertLabelToRoute = (label) => {
		var route = label.replace(/\s+/g, '-').toLowerCase()
		route = '/' + route
		console.log('---route---')
		console.log(route)
		return route
	}
	childRoute = (child) => {
		return child.props.route ? child.props.route : this.convertLabelToRoute(child.props.label)
	}
	renderChildren = () => this.props.children.map((child, index) => {
		return <Route key={index} path={this.props.route + this.childRoute(child)} component={this.renderChild(child)} />
	})

	renderChild = (child) => child.props.children ? () => child.props.children : child.props.workspace ? () => <Workspace>{React.createElement(child.props.workspace)}</Workspace> : null

	renderTabs = () => {
		return (
			<SceneDiv>
				<TabList>
					{this.props.children.map((child, index) => (
						<Tab key={index}
							active={window.location.pathname.includes(this.childRoute(child)) ? true : false}
							label={child.props.label}
							icon={child.props.icon ? child.props.icon : this.props.icon}
							route={this.props.route + this.childRoute(child)} />
					))}
				</TabList>
				{this.renderChildren()}
			</SceneDiv>
		)
	}

	renderNoTabs = () => {
		return (
			<Workspace>
				{this.props.children}
			</Workspace>
		)
	}

	render() {
		return (this.props.children) ? (this.props.children[0].type === Tab) ? this.renderTabs() : this.renderNoTabs() : null
	}
}

export default Menu
