import React, { Component } from 'react'
import Workspace from 'components/Workspace/Workspace'
export default class NoTabsContainer extends Component {
	render() {
		return (
			<Workspace style={{ margin: 5 }}>
				{this.props.children}
			</Workspace>
		)
	}
}
