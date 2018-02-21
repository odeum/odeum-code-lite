import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WorkspaceDiv } from './WorkspaceStyles'
import { SetHelpID } from '../utils/HelpReducer'

class Workspace extends Component {

	componentDidMount() {
		if (this.props.helpID)
			SetHelpID(this.props.helpID)
	}

	render() {
		const { noTab } = this.props
		return (
			<WorkspaceDiv style={this.props.style} noTab={noTab}>
				{this.props.children}
			</WorkspaceDiv>
		)
	}
}

Workspace.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.element])
}
export default Workspace