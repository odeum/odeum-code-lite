import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import { Transition } from 'react-transition-group'

// import { GetHelpID } from '../utils/HelpReducer'
import { HelpPopUp, transitionStyles } from './HelpStyles'
import { HelpSection } from './HelpSection'

export default class HelpPopup extends PureComponent {

	// onClickOutside = (e) => {
	// 	e.stopPropagation()
	// 	if (this.props.openHelp) {
	// 		if (this.node) {
	// 			if (!this.node.contains(e.target)) {
	// 				this.props.handleHelp()
	// 				document.removeEventListener('click', this.onClickOutside, false)
	// 			}
	// 		}
	// 	}
	// }

	setHelpPopUpRef = (node) => {
		this.node = node
	}

	render() {
		const { helpObj } = this.props

		return <Transition in={this.props.openHelp} timeout={300}>
			{state => {
				return <HelpPopUp style={{ ...transitionStyles[state] }} SmallScreen={this.props.SmallScreen} openHelp={this.props.openHelp} innerRef={this.props.innerRef} >
					<HelpSection
						orientation='column'
						titleText='Frequently Asked Questions'
						alignment='left'
						help_title={helpObj ? helpObj.locale_content['en'].help_title : "Loading..."}
						help_description={helpObj ? helpObj.locale_content['en'].help_description : "Loading..."}
						help_title2={helpObj ? helpObj.locale_content['en'].help_title : "Loading..."}
						help_description2={"Lorem ipsum dolor sit amet, vis elitr doctus similique id, te moderatius appellantur mea. Libris mucius explicari ea quo. Timeam voluptua cu mel. Ei fastidii interesset nam. Vix partem mentitum id.Lorem ipsum dolor sit amet, vis elitr doctus similique id, te moderatius appellantur mea. Libris mucius explicari ea quo. Timeam voluptua cu mel. Ei fastidii interesset nam. Vix partem mentitum id."}>
					</HelpSection>
					<HelpSection
						orientation='row'
						titleText='Are you still missing answers?'
						alignment='center'
						help_title="More answers"
						help_description={"See the rest of the FAQ"}
						help_title2={"Contact Odeum support"}
						help_description2={"Number: 88 88 88 88\nEmail: support@odeum.dk"}
						link={'/i-have-help/'}>
					</HelpSection>
				</HelpPopUp>
			}}
		</Transition>
	}
}
HelpPopup.propTypes = {
	helpObj: PropTypes.object
}
HelpPopup.defaultProps = {

}
