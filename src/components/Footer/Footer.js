import React, { Component } from 'react'
import { FooterDiv, B } from 'components/Footer/FooterStyles'
import Help from 'components/Help/Help'
import { ScreenSizes } from 'themes/media'
export default class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			small: false
		}
	}

	componentWillMount() {
		this.smallHelp()
		window.addEventListener('resize', this.smallHelp)
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.smallHelp)
	}
	smallHelp = () => {
		if (window.innerWidth <= ScreenSizes.tablet) {
			this.setState({ small: true })
		}
		else if (window.innerWidth > ScreenSizes.tablet) {
			this.setState({ small: false })
		}
	}
	render() {
		const date = new Date()
		return (
			<FooterDiv>
				<div>
					<B>ODEUM ePlan </B> v2.0.0 © Copyright
					{date.getFullYear()}
				</div>
				<Help small={this.state.small} />
			</FooterDiv>
		)
	}
}
