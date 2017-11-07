import React, { Component } from 'react'
import Workspace from 'components/Workspace/Workspace'

class MenuNoTabs extends Component {

	render() {
		return (
			<Workspace style={{ margin: "20px 20px 20px 20px" }}>
				{this.props.children}
			</Workspace>
		)
	}
}

export default MenuNoTabs