import React, { PureComponent } from 'react'
import { GetHelpID } from '../utils/HelpReducer'
import { HelpPopUp, HelpPopUpFAQ, HelpOverlay, HelpPopUpText, HelpPopUpDivSplitLine, DivWrapper, SplitMoreInfoDiv, HeaderDivider } from './HelpStyles'
import CSSTransitionGroup from 'react-addons-css-transition-group'

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
		var popup
		const { helpObj } = this.props
		const helpID = GetHelpID()
		if (this.props.openHelp) {
			popup = <HelpOverlay className={'fade'}>
				<HelpPopUp openHelp={this.props.openHelp} innerRef={this.props.innerRef} >
					<div style={{ display: 'flex', flexFlow: 'column' }}>
						<HelpPopUpFAQ>
							<HelpPopUpText>Frequently Asked Questions </HelpPopUpText>
						</HelpPopUpFAQ>
						<h1>helpID</h1>
						<HelpPopUpDivSplitLine></HelpPopUpDivSplitLine>
						<HelpPopUpFAQ>
							<HelpPopUpText>Are you still missing answers?</HelpPopUpText>
						</HelpPopUpFAQ>
						<DivWrapper>
							<SplitMoreInfoDiv>{helpObj ? helpObj.locale_content['en'].help_title : `Loading...`}</SplitMoreInfoDiv>
							<HeaderDivider/>
							<SplitMoreInfoDiv>{helpObj ? helpObj.locale_content['en'].help_description : ''}</SplitMoreInfoDiv>
						</DivWrapper>
					</div>
				</HelpPopUp>
			</HelpOverlay>
		}


		return <CSSTransitionGroup
			transitionName="fade"
			transitionAppear={true}
			transitionAppearTimeout={500}
			transitionEnterTimeout={500}
			transitionLeaveTimeout={1500}
		>
			{popup}
		</CSSTransitionGroup>





	}
}
