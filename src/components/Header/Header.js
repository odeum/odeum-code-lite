import React, { Component } from 'react'
import { HeaderDiv } from './HeaderStyles'
import { LogoDiv, LogoImg } from './HeaderStyles'
export default class Header extends Component {
	renderNotification = () => {
		return(
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
			<LogoDiv>
				<LogoImg src={logo} />
			</LogoDiv>)
	}
	renderSearchBar = () => {
		return (<div>Search</div>)
	}
	render() {
		const { logo, search, notification, avatar } = this.props
		const { renderLogo, renderSearchBar, renderAvatar, renderNotification } = this
		return (
			<HeaderDiv>
				{logo && renderLogo(logo)}
				{search && renderSearchBar()}
				{avatar && renderAvatar()}
				{notification && renderNotification()}
				{/* Header */}
			</HeaderDiv>
		)
	}
}
