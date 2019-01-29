import React, { Component } from 'react'
import Workspace from '../Workspace/Workspace'
import { SceneDiv } from 'components/Tabs/TabStyles'

export default class NotFound extends Component {
	render() {
		return (
			<SceneDiv>
				<Workspace>
					404
				</Workspace>
			</SceneDiv>
		)
	}
}
