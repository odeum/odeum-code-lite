import React, { PureComponent } from 'react'
// import { GetHelpID } from '../utils/HelpReducer'
import { QuickHelpPopUp } from './QuickHelpStyles'
import { transitionStyles, HelpPopUpTitleText,
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
							{props.help_description}
						</HelpComponentItem>
						{props.orientation === 'row' ? <VerticalDivider /> : <HorizontalDivider />}
						<HelpComponentItem>
							<h3>{props.help_title2}</h3>
							{props.help_description2}
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