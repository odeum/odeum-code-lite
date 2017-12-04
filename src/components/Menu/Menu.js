import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { TabList, SceneDiv } from '../Tabs/TabStyles'
import Tab from '../Tabs/Tab'
import Workspace from 'components/Workspace/Workspace'
import { convertLabelToRoute, isExact } from '../utils/Functions'

class Menu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeTab: 0
		}
	}


	componentWillMount = () => {
		if (window.location.pathname.includes(this.props.route) && this.props.index !== undefined && this.props.activeMenu !== this.props.index) {
			this.props.setActiveMenu(this.props.index)
		}
	}

	//#region Label Converting for Menu
	route = (child) => this.props.route !== undefined ? this.props.route : convertLabelToRoute(this.props.label)
	childRoute = (child) => {
		return child.props.route !== undefined ? child.props.route : convertLabelToRoute(child.props.label)
	}

	//#endregion

	//#region RenderChildren

	renderChildren = (children) => children.map((child, index) => {
		// console.log(child.props.exact, child.props.label)
		return <Route key={index} path={this.route() + this.childRoute(child)}
			exact={isExact(this.childRoute(child))}
			component={this.renderChild(child)} />
	})

	renderChild = (child) => () => <Workspace >{child.props.children}</Workspace>

	//#endregion
	setHelpID = (id) => {
		if (this.props.SetHelpID)
			this.props.SetHelpID(id, 'Menu')
	}
	setActiveTab = (key) => {
		console.log('SetActiveTab', key)
		this.setState({ activeTab: key })
		if (React.Children.toArray(this.props.children)[key].props.helpID !== undefined)
			this.setHelpID(React.Children.toArray(this.props.children)[key].props.helpID)
	}
	renderTabs = (children) => {
		if (children[0].type === Tab)
			return (
				<SceneDiv>
					{!this.props.quicknav ? <TabList>
						{children.map((child, index) => (
							<Tab key={index}
								helpID={child.props.helpID ? child.props.helpID : undefined}
								tabID={index}
								exact={isExact(this.childRoute(child))}
								label={child.props.label}
								icon={child.props.icon}
								route={this.route() + this.childRoute(child)}
								setActiveTab={this.setActiveTab}
								activeTab={this.state.activeTab} />
						))}
					</TabList> : null}
					<Switch>
						{this.renderChildren(children)}
					</Switch>
				</SceneDiv>
			)
		else {
			return (
				<SceneDiv>
					{this.renderNoTabs(children)}
				</SceneDiv>
			)
		}
	}

	renderNoTabs = (children) => {
		return (
			<Workspace noTab helpID={this.props.helpID ? this.props.helpID : null}>
				{children}
			</Workspace>
		)
	}

	render() {
		console.log(this.props.label, this.state.activeTab)
		return this.renderTabs(React.Children.toArray(this.props.children))
	}
}

Menu.propTypes = {
	label: PropTypes.string,
	route: PropTypes.string,
	icon: PropTypes.string,
}



export default Menu
