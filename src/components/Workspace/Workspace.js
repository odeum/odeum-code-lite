import React, { Component } from 'react'
import { WorkspaceDiv } from './WorkspaceStyles'

class Workspace extends Component {

	componentDidMount() {
		if (this.props.helpID)
			this.props.SetHelpID(this.props.helpID, 'Workspace')
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

export default Workspace

