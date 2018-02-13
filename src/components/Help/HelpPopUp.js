import React, { PureComponent } from 'react'
// import { GetHelpID } from '../utils/HelpReducer'
import { HelpPopUp, transitionStyles, HelpPopUpFAQ, HelpPopUpText, HelpPopUpDivSplitLine, DivWrapper, SplitMoreInfoDiv, VerticalDivider, HorizontalDivider, Question, QuestionDescriptionTextStyle } from './HelpStyles'
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

		return <Transition in={this.props.openHelp} timeout={300}>
			{state => {
				return <HelpPopUp style={{ ...transitionStyles[state] }} openHelp={this.props.openHelp} innerRef={this.props.innerRef} >
					<div style={{ display: 'flex', flexFlow: 'column', 'fontSize': '0.8vw' }}>
						<HelpPopUpFAQ>
							<HelpPopUpText>Frequently Asked Questions </HelpPopUpText>
						</HelpPopUpFAQ>
						<div style={{ 'textAlign': 'left' }}>
							<Question>
								<h3>{helpObj ? helpObj.locale_content['en'].help_title : `Loading...`}</h3>
								<QuestionDescriptionTextStyle>{helpObj ? helpObj.locale_content['en'].help_description : ''}</QuestionDescriptionTextStyle>
							</Question>
							<HorizontalDivider/>
							<Question>
								<h3>{helpObj ? helpObj.locale_content['en'].help_title : `Loading...`}</h3>
								<QuestionDescriptionTextStyle>Lorem ipsum dolor sit amet, vis elitr doctus similique id, te moderatius appellantur mea. Libris mucius explicari ea quo. Timeam voluptua cu mel. Ei fastidii interesset nam. Vix partem mentitum id.</QuestionDescriptionTextStyle>
							</Question>
						</div>
						<HelpPopUpDivSplitLine/>
						<div style={{ 'wordWrap': 'break-word', 'paddingTop': 'auto' }}>
							<HelpPopUpFAQ>
								<HelpPopUpText>Are you still missing answers?</HelpPopUpText>
							</HelpPopUpFAQ>
							<DivWrapper>
								<SplitMoreInfoDiv>
									<a href="http://www.google.dk">
										<h3 style={{ 'fontSize': '13px' }}>More answers</h3>
									</a>
									<p style={{ 'marginTop': '-5px' }}>See the rest of the FAQ</p>
								</SplitMoreInfoDiv>
								<VerticalDivider />
								<SplitMoreInfoDiv>
									<h3 style={{ 'fontSize': '13px' }}>Contact Odeum support</h3>									
									<div style={{ 'marginTop': '-5px' }}>
										<p>Number: 88 88 88 88</p>
										<p style={{ 'marginTop': '-10px' }}>Email: support@odeum.dk</p>
									</div>
								</SplitMoreInfoDiv>
							</DivWrapper>
						</div>
					</div>
				</HelpPopUp>
			}}
		</Transition>
	}
}
