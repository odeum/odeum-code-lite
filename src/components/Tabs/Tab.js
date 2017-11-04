import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabIconDiv, Link } from './TabStyles'
import { Icon } from 'odeum-ui'
import theme from 'themes/default'
export default class Tab extends Component {
	
	componentWillMount() {
		// this.props.SetHelpID(this.props.label)
	}
	
	iconIsActive = () => this.props.active ? theme.icon.selected : theme.icon.default
	render() {
		return (
			<Link to={this.props.route} selected={this.props.active}>
				<TabIconDiv><Icon color={this.iconIsActive()} iconSize={20} icon={this.props.icon} style={{ marginRight: '0px' }} /></TabIconDiv>
				{this.props.label}
			</Link>
		)
	}
}

Tab.propTypes = {
	label: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired
}