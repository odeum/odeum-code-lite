import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HelpDiv, Bold, HelpIcon, HelpButton, HelpPopUp } from './HelpStyles'
import { GetHelpID } from '../utils/HelpReducer'
import { create } from 'apisauce'

const api = create({
	baseURL: `https://jsonplaceholder.typicode.com/`,
})
const obj = {
	app_id: 1,
	help_id: 1234,
	locale_content: {
		'en': {
			help_title: 'This is the title of the help entry',
			help_description: 'This is the description of the help entry',
			help_content:
				[
					{ type: 'text', title: '', description: '' },
					{ type: 'image', title: '', description: '', url: '' },
					{ type: 'image', title: '', description: '', url: '' },
					{ type: 'video', title: '', description: '', url: '' },
					{ type: 'link', title: '', description: '', url: '' },
					{ type: 'svg', title: '', description: '', url: '' },
					{ type: 'pdf', title: '', description: '', url: '' },
					{ type: 'document', title: '', description: '', url: '' },
				]
		}
	}
}

class Help extends Component {
	constructor(props) {
		super(props)

		this.state = {
			openHelp: false,
			helpObj: null
		}
	}
	setHelpPopUpRef = (node) => {
		this.node = node
	}

	renderHelp = () => {
		const { helpObj } = this.state
		var helpID = GetHelpID()
		//this.getHelpData(helpID)
		return <HelpPopUp innerRef={this.setHelpPopUpRef}>
			<div style={{ display: 'flex', flexFlow: 'column' }}>
				<h1>{helpID}</h1>
				<h2>{ helpObj ? helpObj.locale_content['en'].help_title : `Loading...` }</h2>
				<p>{helpObj ? helpObj.locale_content['en'].help_description : '' }</p>
			</div>
		</HelpPopUp>
	}

	getHelpData = (helpID) => {
		api.get('/photos/8')
			.then((response) => {
				this.setState({ helpObj: response.data })
			})
	}

	componentWillMount() {
		this.setState({ helpObj: obj })
	}

	onClickOutsise = (e) => {
		if (this.state.openHelp) {
			if (!this.node.contains(e.target)) {
				this.setState({ openHelp: false })
				document.removeEventListener('click', this.onClickOutside, false)
			}
		}
	}

	openHelp = () => {
		document.addEventListener('click', this.onClickOutside, false)
		this.setState({ openHelp: !this.state.openHelp })
	}

	render() {
		return (
			<HelpDiv small={this.props.small}>
				<HelpButton onClick={this.openHelp}>
					<HelpIcon icon={'help'} style={{ marginRight: "0px" }} />
					{!this.props.small ? <Bold>{this.props.helpLabel}</Bold> : null}
				</HelpButton>
				{this.state.openHelp && this.renderHelp()}
			</HelpDiv>
		)
	}
}

Help.propTypes = {
	helpLabel: PropTypes.string,
	small: PropTypes.bool
}

Help.defaultProps = {
	helpLabel: 'Need help?'
}

export default Help
