import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyledFooter, Link } from './FooterStyles'
import Help from '../Help/Help'
import { ScreenSizes } from '../../theme/media'
import packageJSOn from '../../../package.json'
class Footer extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			SmallScreen: false
		}
	}

	componentWillMount() {
		this.OnSmallScreen()
		window.addEventListener('resize', this.OnSmallScreen)
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.OnSmallScreen)
	}

	OnSmallScreen = () => {
		if (window.innerWidth < ScreenSizes.tablet) {
			this.setState({ SmallScreen: true })
		}
		else {
			if (window.innerWidth >= ScreenSizes.tablet && this.state.SmallScreen === true)
				this.setState({ SmallScreen: false })
		}
	}

	render() {
		const { help, labelLink, label, target, helpID, helpLabel } = this.props
		const { SmallScreen } = this.state
		return (
			!SmallScreen ? <StyledFooter>
				<Link href={labelLink ? labelLink : this.defaultProps.labelLink} target={target}>
					<div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', alignItems: 'center' }}>
						{label ? <this.props.label /> : <Footer.defaultProps.label />}
						{/* &nbsp;| Debug: {this.props.helpID} */}
					</div>
				</Link>
				{help ? <Help SmallScreen={SmallScreen} helpID={helpID} helpLabel={helpLabel} /> : null}
			</StyledFooter> : null
		)
	}
}

Footer.propTypes = {
	label: PropTypes.any,
	labelLink: PropTypes.string,
	target: PropTypes.string,
	debug: PropTypes.string
}

Footer.defaultProps = {
	label: () => {
		var date = new Date()
		return < div >
			<b>ODEUM Code Lite </b> v{packageJSOn.version} © Copyright {' '}{date.getFullYear()
			}
		</div>
	},
	labelLink: '/',
	target: '',
	debug: ''

}

export default Footer