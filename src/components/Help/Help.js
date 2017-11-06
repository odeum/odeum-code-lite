import React, { Component } from 'react'
import { Icon } from 'odeum-ui'
import { HelpDiv } from './HelpStyles'
export default class Help extends Component {
	render() {
		return (
			<HelpDiv small={this.props.small}>
				<Icon icon={'help'} style={{ marginRight: 0 }} />
				{this.props.small ? 'Brug for Hjælp?' : ''}
			</HelpDiv>
		)
	}
}
