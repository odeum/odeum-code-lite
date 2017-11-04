import React, { Component } from 'react'
import { FooterDiv } from 'components/Footer/FooterStyles'
import Help from 'components/Help/Help'

export default class Footer extends Component {
	render() {
		const date = new Date()
		return (
			<FooterDiv>
				<div>
					<b>ODEUM ePlan </b> &nbsp; v2.0.0 © Copyright
					{date.getFullYear()}
				</div>
				<Help />
			</FooterDiv>
		)
	}
}
