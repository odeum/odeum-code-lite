import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeaderDiv } from './HeaderStyles'
import { LogoDiv, LogoImg } from './HeaderStyles'
import { ScreenSizes } from 'theme/media'
import theme from 'theme/default'

//TODO Check the logo dissapearing on resize 
export default class Header extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quicknav: false,
			logo: undefined
		}
	}

	updateLogo = () => {
		this.changeLogo(this.props.logo ? this.props.logo : theme.logo)
		this.setState({ quicknav: window.innerWidth <= ScreenSizes.tablet ? true : false })
	}
	changeLogo = (logo) => {
		this.setState({ logo: logo.default })
	}
	componentWillMount() {
		if (this.props.logo !== undefined)
			this.changeLogo(this.props.logo)
		else
			this.changeLogo(theme.logo)
		window.addEventListener('resize', this.updateLogo)

	}
	componentWillUpdate = (nextProps, nextState) => {
		if (this.props.logo !== nextProps.logo)
			this.changeLogo(nextProps.logo)
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.changeLogo)
	}
	renderNotification = () => (
		<div>NotiF</div>
	)

	renderAvatar = () => (
		<div>Avatar</div>
	)

	renderLogo = (logo) => (
		<LogoDiv to={'/'}>
			<LogoImg src={logo} />
		</LogoDiv>)


	renderSearchBar = () => {
		return (<div>Search</div>)
	}

	render() {
		const { search, notification, avatar } = this.props
		const { logo } = this.state
		const { renderLogo, renderSearchBar, renderAvatar, renderNotification } = this
		return (
			<HeaderDiv quicknav={this.state.quicknav}>
				{logo && renderLogo(logo)}
				{search && renderSearchBar()}
				{avatar && renderAvatar()}
				{notification && renderNotification()}
			</HeaderDiv>
		)
	}
}

//TODO 
Header.propTypes = {
	logo: PropTypes.object || PropTypes.string,
	search: PropTypes.bool,
	notification: PropTypes.bool,
	avatar: PropTypes.bool,
}

Header.defaultProps = {
	search: false,
	notification: false,
	avatar: false
}

