import React, { Component } from 'react'
import Menu from './Menu'
export default class Page extends Component {
	render() {
		return (
			<Menu route={this.props.route} helpID={this.props.helpID}>
				{this.props.children}
			</Menu>
		)
	}
}
