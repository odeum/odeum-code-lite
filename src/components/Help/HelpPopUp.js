import React, { PureComponent } from 'react'
import { GetHelpID } from '../utils/HelpReducer'
import { HelpPopUp, HelpOverlay } from './HelpStyles'

export default class HelpPopup extends PureComponent {

	onClickOutside = (e) => {
		e.stopPropagation()
		if (this.props.openHelp) {
			if (this.node) {
				if (!this.node.contains(e.target)) {
					this.props.handleHelp()
					document.removeEventListener('click', this.onClickOutside, false)
				}
			}
		}
	}
	setHelpPopUpRef = (node) => {
		this.node = node
	}
	render() {
		const { helpObj } = this.props
		const helpID = GetHelpID()
		return this.props.openHelp ?
			<HelpOverlay>

				<HelpPopUp innerRef={this.props.innerRef}>
					<div style={{ display: 'flex', flexFlow: 'column' }}>
						<h1>{helpID}</h1>
						<h2>{helpObj ? helpObj.locale_content['en'].help_title : `Loading...`}</h2>
						<p>{helpObj ? helpObj.locale_content['en'].help_description : ''}</p>
					</div>
				</HelpPopUp>
			</HelpOverlay>
			: null


	}
}
