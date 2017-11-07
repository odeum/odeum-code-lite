import React, { Component } from 'react'
import { FooterDiv, Link } from 'components/Footer/FooterStyles'
import Help from 'components/Help/Help'
import { ScreenSizes } from 'theme/media'
class Footer extends Component {
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
		return (
			<FooterDiv>
				<Link to={this.props.labelLink ? this.props.labelLink : this.defaultProps.labelLink}>
					{this.props.label ? <this.props.label /> : <this.defaultProps.label />}
				</Link>
				<Help small={this.state.small} />
			</FooterDiv>
		)
	}
}

Footer.defaultProps = {
	label: <div>
		<b>ODEUM Code Lite </b> v1.0.0 © Copyright
	</div>,
	labelLink: '/'

}
export default Footer