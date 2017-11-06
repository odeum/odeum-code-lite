import React, { Component } from 'react'
import { FooterDiv } from 'components/Footer/FooterStyles'
import Help from 'components/Help/Help'
import ScreenSizes from 'themes/media'
export default class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			small: false
		}
	}

	componentWillMount() {
		window.addEventListener('resize', this.smallHelp)
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.smallHelp)
	}
	smallHelp = () => {
		if (window.innerWidth <= ScreenSizes.tablet)
			this.setState({ small: true })
	}
	render() {
		const date = new Date()
		return (
			<FooterDiv>
				<div>
					<b>ODEUM ePlan </b> &nbsp;v2.0.0 © Copyright
					{date.getFullYear()}
				</div>
				<Help small={this.state.small} />
			</FooterDiv>
		)
	}
}
