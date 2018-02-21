import React, { Component } from 'react'
import Menu from './Menu'
import PropTypes from 'prop-types'
class Page extends Component {
	render() {
		return (
			<Menu {...this.props}>
				{this.props.children}
			</Menu>
		)
	}
}
Page.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.element])
}
export default Page