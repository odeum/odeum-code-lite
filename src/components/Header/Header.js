import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeaderDiv } from './HeaderStyles'
import { LogoDiv, LogoImg } from './HeaderStyles'
import { ScreenSizes } from 'theme/media'
import theme from 'theme/default'

//TODO Check the logo dissapearing on resize 
export default class Header extends Component {
	updateLogo = () => {
		this.changeLogo(this.props.logo ? this.props.logo : theme.logo)
	}
	changeLogo = (logo) => {

		this.setState({ logo: window.innerWidth >= ScreenSizes.tablet ? logo.default : logo.smallLogo })
		console.log(logo.smallLogo)
	}
	/*TODO: Default Logo always */
	componentWillMount() {
		if (this.props.logo !== undefined)
			this.changeLogo(theme.logo)
		else
			this.changeLogo(this.props.logo)
		window.addEventListener('resize', this.updateLogo)

	}
	componentWillUpdate = (nextProps, nextState) => {
		if (this.props.logo !== nextProps.logo)
			this.changeLogo(nextProps.logo)
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.changeLogo)
	}
	renderNotification = () => {
		return (
			<div>NotiF</div>
		)
	}

	renderAvatar = () => {
		return (
			<div>Avatar</div>
		)
	}

	renderLogo = (logo) => {
		// console.log('renderLogo', logo)
		return (
			<LogoDiv to={'/'}>
				<LogoImg src={logo} />
			</LogoDiv>)
	}

	renderSearchBar = () => {
		return (<div>Search</div>)
	}

	render() {
		// console.log(this.props.logo)
		const { search, notification, avatar } = this.props
		const { logo } = this.state
		const { renderLogo, renderSearchBar, renderAvatar, renderNotification } = this
		return (
			<HeaderDiv>
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

