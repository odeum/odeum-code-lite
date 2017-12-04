import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabIconDiv, Link, TabText } from './TabStyles'
import { Icon } from 'odeum-ui'
import theme from 'theme/default'


class Tab extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: false
		}
	}

	componentWillMount() {
		console.log(window.location.pathname.includes(this.props.route), this.props.activeTab !== this.props.tabID)
		if (window.location.pathname === this.props.route && !this.state.active) {
			this.setState({ active: true })
		}


		//else
		//this.setState({ active: false })
	}

	activate = () => {
		console.log(this.props.tabID)
		this.props.setActiveTab(this.props.tabID ? this.props.tabID : 0)
	}
	iconIsActive = () => this.state.active ? theme.icon.selected : theme.icon.default

	render() {
		return (
			<Link to={this.props.route} activetab={this.state.active.toString()} onClick={this.activate}>
				<TabIconDiv><Icon color={this.iconIsActive()} iconSize={20} icon={this.props.icon ? this.props.icon : this.defaultProps.icon} style={{ marginRight: '0px' }} /></TabIconDiv>
				<TabText>
					{this.props.label}
				</TabText>
			</Link>
		)
	}
}

Tab.propTypes = {
	label: PropTypes.string.isRequired,
	route: PropTypes.string,
	icon: PropTypes.string
}

// Tab.defaultProps = {
//	label:'Tab',
// 	icon: 'tab'
// }
export default Tab
