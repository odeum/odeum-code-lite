import React, { Component } from 'react'
import { Icon } from 'odeum-ui'
import { HelpDiv } from './HelpStyles'
export default class Help extends Component {
	render() {
		return (
			<HelpDiv>
				<Icon icon={'help'}/>
				Brug for Hjælp?
			</HelpDiv>
		)
	}
}
