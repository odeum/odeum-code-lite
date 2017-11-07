import React, { Component } from 'react'
// import { Icon } from 'odeum-ui'
import { HelpDiv, B, Icon, HelpButton } from './HelpStyles'

export default class Help extends Component {
	render() {		
		return (
			<HelpDiv small={this.props.small}>
				<HelpButton>
					<Icon icon={'help'} style={{ marginRight: "0px" }} />
					{!this.props.small ? <B>Brug for Hjælp?</B> : null}
				</HelpButton>
			</HelpDiv>
		)
	}
}
