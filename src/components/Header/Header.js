import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeaderDiv } from './HeaderStyles'
import { LogoDiv, LogoImg } from './HeaderStyles'
import { ScreenSizes } from 'themes/media'
export default class Header extends Component {

	constructor(props) {
		super(props)
		this.state = {
			logo: this.props.logo ? this.props.logo : this.props.logos ? this.props.logos[0] : null
		}
	}
	changeLogo = () => {
		this.setState({ logo: window.innerWidth >= ScreenSizes.tablet ? this.props.logos[0] : this.props.logos[1] })
	}
	componentWillMount() {
		if (this.props.logos.length >= 2) {
			this.changeLogo()
			window.addEventListener('resize', this.changeLogo)
		}
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.changeLogo)
	}

	renderNotification = () => {
		return (
			<div>NotF</div>
		)
	}
	renderAvatar = () => {
		return (
			<div>Avatar</div>
		)
	}
	renderLogo = (logo) => {
		return (
			<LogoDiv to={'/'}>
				<LogoImg src={logo} />
			</LogoDiv>)
	}
	renderSearchBar = () => {
		return (<div>Search</div>)
	}
	render() {
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

Header.propTypes = {
	logo: PropTypes.string,
	search: PropTypes.bool,
	notification: PropTypes.bool,
	avatar: PropTypes.bool,
}