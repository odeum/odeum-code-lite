/*import React, { PureComponent } from 'react'
import { QuickHelpPopUp, transitionStyles, HelpPopUpFAQ,
	HelpPopUpText, HelpPopUpDivSplitLine, DivWrapper,
	SplitMoreInfoDiv, Question, QuestionDescriptionTextStyle, DescriptionTitle,
	DescriptionTextStyle, ContactSupportDivStyle, MoreInfoDivStyle,
	ContactSupportDiv, DescriptionDivStyle } from './QuickHelpStyles'
import { Transition } from 'react-transition-group'

export default class QuickHelpPopup extends PureComponent {

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

	renderDescription() {
		const { helpObj } = this.props

		return (
			<div>
				<HelpPopUpFAQ>
					<HelpPopUpText>Frequently Asked Questions </HelpPopUpText>
				</HelpPopUpFAQ>
				<DescriptionDivStyle>
					<Question>
						<h3>{helpObj ? helpObj.locale_content['en'].help_title : `Loading...`}</h3>
						<QuestionDescriptionTextStyle>{helpObj ? helpObj.locale_content['en'].help_description : ''}</QuestionDescriptionTextStyle>
					</Question>
					<Question>
						<h3>{helpObj ? helpObj.locale_content['en'].help_title : `Loading...`}</h3>
						<QuestionDescriptionTextStyle>Lorem ipsum dolor sit amet, vis elitr doctus similique id, te moderatius appellantur mea. Libris mucius explicari ea quo. Timeam voluptua cu mel. Ei fastidii interesset nam. Vix partem mentitum id.</QuestionDescriptionTextStyle>
					</Question>
				</DescriptionDivStyle>
			</div>
		)
	}

	renderMoreInfo() {
		return (
			<div>
				<HelpPopUpFAQ>
					<HelpPopUpText>Are you still missing answers?</HelpPopUpText>
				</HelpPopUpFAQ>
				<DivWrapper>
					<SplitMoreInfoDiv>
						<a href="http://www.google.dk">
							<DescriptionTitle>More answers</DescriptionTitle>
						</a>
						<DescriptionTextStyle>See the rest of the FAQ</DescriptionTextStyle>
					</SplitMoreInfoDiv>
					<SplitMoreInfoDiv>
						<DescriptionTitle>Contact Odeum support</DescriptionTitle>
						<ContactSupportDivStyle>
							<p>Number: 88 88 88 88</p>
							<DescriptionTextStyle>Email: support@odeum.dk</DescriptionTextStyle>
						</ContactSupportDivStyle>
					</SplitMoreInfoDiv>
				</DivWrapper>
			</div>
		)
	}

	render() {
		return <Transition in={this.props.openHelp} timeout={300}>
			{state => {
				return <QuickHelpPopUp style={{ ...transitionStyles[state] }} openHelp={this.props.openHelp} innerRef={this.props.innerRef} >
					<MoreInfoDivStyle>
						{this.renderDescription()}
						<HelpPopUpDivSplitLine />
						<ContactSupportDiv>
							{this.renderMoreInfo()}
						</ContactSupportDiv>
					</MoreInfoDivStyle>
				</QuickHelpPopUp>
			}}
		</Transition>
	}
}*/

import React, { PureComponent } from 'react'
// import { GetHelpID } from '../utils/HelpReducer'
import { QuickHelpPopUp } from './QuickHelpStyles'
import { transitionStyles, HelpPopUpTitleText, QuestionDescriptionTextStyle, 
	DescriptionDivStyle, HelpComponentItem, VerticalDivider,
	HorizontalDivider } from '../Help/HelpStyles'
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

	HelpComponent = (props) => {
		return (
			<div>
				<HelpPopUpTitleText>{props.titleText}</HelpPopUpTitleText>
				<div>
					<DescriptionDivStyle orientation={props.orientation} alignment={props.alignment}>
						<HelpComponentItem>
							<h3>{props.help_title}</h3>
							<QuestionDescriptionTextStyle>{props.help_description}</QuestionDescriptionTextStyle>
						</HelpComponentItem>
						{props.orientation === 'row' ? <VerticalDivider /> : <HorizontalDivider />}
						<HelpComponentItem>
							<h3>{props.help_title2}</h3>
							<QuestionDescriptionTextStyle>{props.help_description2}</QuestionDescriptionTextStyle>
						</HelpComponentItem>
					</DescriptionDivStyle>
				</div>
			</div>
		)
	}

	render() {
		const { helpObj } = this.props

		return <Transition in={this.props.openHelp} timeout={300}>
			{state => {
				return <QuickHelpPopUp style={{ ...transitionStyles[state] }} openHelp={this.props.openHelp} innerRef={this.props.innerRef} >
					<this.HelpComponent
						orientation='column'
						titleText='Frequently Asked Questions'
						alignment='left'
						help_title={helpObj ? helpObj.locale_content['en'].help_title : "Loading..."}
						help_description={helpObj ? helpObj.locale_content['en'].help_description : "Loading..."}
						help_title2={helpObj ? helpObj.locale_content['en'].help_title : "Loading..."}
						help_description2={"Lorem ipsum dolor sit amet, vis elitr doctus similique id, te moderatius appellantur mea. Libris mucius explicari ea quo. Timeam voluptua cu mel. Ei fastidii interesset nam. Vix partem mentitum id."}>
					</this.HelpComponent>
					<this.HelpComponent
						orientation='row'
						titleText='Are you still missing answers?'
						alignment='center'
						help_title="More answers"
						help_description={"See the rest of the FAQ"}
						help_title2={"Contact Odeum support"}
						help_description2={"Number: 88 88 88 88\nEmail: support@odeum.dk"}>
						></this.HelpComponent>
				</QuickHelpPopUp>
			}}
		</Transition>
	}
}