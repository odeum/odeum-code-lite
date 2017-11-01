import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabDiv, Link } from './TabStyles'

export default class Tab extends Component {
	render() {
		return (
			<Link to={this.props.route} selected={this.props.active}>
				<TabDiv>
					{this.props.label}
				</TabDiv>
			</Link>
		)
	}
}

Tab.propTypes = {
	label: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired
}