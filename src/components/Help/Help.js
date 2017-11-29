import React, { Component } from 'react'
// import { Icon } from 'odeum-ui'
import { HelpDiv, Bold, Icon, HelpButton } from './HelpStyles'


class Help extends Component {
	render() {		
		return (
			<HelpDiv small={this.props.small}>
				<HelpButton>
					<Icon icon={'help'} style={{ marginRight: "0px" }} />
					{!this.props.small ? <Bold>{this.props.helpLabel}</Bold> : null}
				</HelpButton>
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
