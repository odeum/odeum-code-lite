import React, { Component } from 'react'
import { WorkspaceDiv } from './WorkspaceStyles'

export default class Workspace extends Component {

	render() {
		return (
			<WorkspaceDiv style={this.props.style}>
				{this.props.children}
			</WorkspaceDiv>
		)
	}
}
