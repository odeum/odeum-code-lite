import React, { Component } from 'react'
import Workspace from 'components/Workspace/Workspace'
export default class NoTabsContainer extends Component {
	render() {
		return (
			<Workspace style={{ margin: "20px 10px 10px 20px" }}>
				{this.props.children}
			</Workspace>
		)
	}
}
