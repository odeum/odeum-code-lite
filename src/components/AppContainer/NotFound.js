import React, { Component } from 'react'
import Workspace from '../Workspace/Workspace'
// import hercules from './hercules.jpg'
import { SceneDiv } from 'components/Tabs/TabStyles'
export default class NotFound extends Component {
	render() {
		return (
			<SceneDiv>
				<Workspace>
					{/* <img src={hercules} alt='Hercules'/>Oh noes, you found Hercules! */}
				404
				</Workspace>
			</SceneDiv>
		)
	}
}
