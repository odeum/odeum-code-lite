import React, { Component } from 'react'
// import { Icon } from 'odeum-ui'
import { HelpDiv, Bold, Icon, HelpButton } from './HelpStyles'


export default class Help extends Component {

	HelpActive = () => {
		alert(this.props.helpID)
	}

	render() {
		return (
			<HelpDiv small={this.props.small}>
				<HelpButton onClick={this.HelpActive}>
					<Icon icon={'help'} style={{ marginRight: "0px" }} />
					{!this.props.small ? <Bold>Brug for Hjælp?</Bold> : null}
				</HelpButton>
			</HelpDiv>
		)
	}
}
