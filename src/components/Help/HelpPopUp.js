import React, { PureComponent } from 'react'
import { GetHelpID } from '../utils/HelpReducer'
import { HelpPopUp, HelpOverlay, transitionStyles, HelpPopUpFAQ, HelpPopUpText, HelpPopUpDivSplitLine, DivWrapper, SplitMoreInfoDiv } from './HelpStyles'
import { Transition } from 'react-transition-group'

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

		return <Transition in={this.props.openHelp} timeout={300}>
			{state => {
				console.log(state)
				return <HelpOverlay style={{ ...transitionStyles[state] }}>
					<HelpPopUp style={{ ...transitionStyles[state] }} openHelp={this.props.openHelp} innerRef={this.props.innerRef} >
						<div style={{ display: 'flex', flexFlow: 'column' }}>
							<HelpPopUpFAQ>
								<HelpPopUpText>Frequently Asked Questions </HelpPopUpText>
							</HelpPopUpFAQ>
							<h1>helpID</h1>
							<h3>{helpObj ? helpObj.locale_content['en'].help_title : `Loading...`}</h3>
							{helpObj ? helpObj.locale_content['en'].help_description : ''}
							<HelpPopUpDivSplitLine/>
							<div style={{ 'padding-top': '20%' }}>
								<HelpPopUpFAQ>
									<HelpPopUpText>Are you still missing answers?</HelpPopUpText>
								</HelpPopUpFAQ>
								<DivWrapper>
									<SplitMoreInfoDiv>
										<a url="http://www.google.dk">
											<h3>More answers</h3>
											<p>See the rest of the FAQ</p>
										</a>
									</SplitMoreInfoDiv>
									<SplitMoreInfoDiv>
										<h3>Contact Odeum support</h3>
										<p>Number: 88 88 88 88</p>
										<p>Email: support@odeum.dk</p>
									</SplitMoreInfoDiv>
								</DivWrapper>
							</div>
						</div>
					</HelpPopUp>
				</HelpOverlay>
			}}
		</Transition>
	}
}
