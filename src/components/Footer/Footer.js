import React, { Component } from 'react'
import { FooterDiv } from 'components/Footer/FooterStyles'
export default class Footer extends Component {
	render() {
		const date = new Date()
		return (
			<FooterDiv>
				<b>ODEUM ePlan </b> &nbsp; v2.0.0 © Copyright
				{date.getFullYear()}
			</FooterDiv>
		)
	}
}
