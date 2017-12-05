import React, { Component } from 'react'
// import { Icon } from 'odeum-ui'
import { HelpDiv, Bold, Icon, HelpButton, HelpPopUp } from './HelpStyles'
import { GetHelpID } from '../utils/HelpReducer'

class Help extends Component {
	constructor(props) {
		super(props)

		this.state = {
			openHelp: false
		}
	}

	renderHelp = () => {
		var helpID = GetHelpID()
		return <HelpPopUp onClick={this.openHelp}>
			<h1>Help Title
				{helpID}
			</h1>
			<p>Description</p>
		</HelpPopUp>
	}
	openHelp = () => {
		this.setState({ openHelp: !this.state.openHelp })
	}
	render() {
		return (
			<HelpDiv small={this.props.small}>
				<HelpButton onClick={this.openHelp}>
					<Icon icon={'help'} style={{ marginRight: "0px" }} />
					{!this.props.small ? <Bold>{this.props.helpLabel}</Bold> : null}
				</HelpButton>
				{this.state.openHelp && this.renderHelp()}
			</HelpDiv>
		)
	}
}

// Help.propTypes = {
// 	label: PropTypes.string,
// 	small: PropTypes.bool
// }

Help.defaultProps = {
	helpLabel: 'Need help?'
}

export default Help
