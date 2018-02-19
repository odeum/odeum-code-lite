import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HelpDiv, Bold, HelpIcon, HelpButton } from './HelpStyles'
import { GetHelpID } from '../utils/HelpReducer'
// import { create } from 'apisauce'
import HelpPopup from './HelpPopUp'
import { GetHelpItem } from './HelpData'
// import QuickHelpPopup from '../QuickNavigation/QuickHelp'

// const api = create({
// 	baseURL: `https://jsonplaceholder.typicode.com/`,
// })

/* 
	Best practice is to split them in specific roles(Biggest advantage is debugging), so:
	  - HelpData will contain the functions to speak with the server
	  - Help will act as a controller/container 
	  - HelpPopup will be a presentational/GUI related component
*/
// const obj = {
// 	app_id: 1,
// 	help_id: 1234,
// 	locale_content: {
// 		'en': {
// 			help_title: 'This is the title of the help entry',
// 			help_description: 'This is the description of the help entry',
// 			help_content:
// 				[
// 					{ type: 'text', title: '', description: '' },
// 					{ type: 'image', title: '', description: '', url: '' },
// 					{ type: 'image', title: '', description: '', url: '' },
// 					{ type: 'video', title: '', description: '', url: '' },
// 					{ type: 'link', title: '', description: '', url: '' },
// 					{ type: 'svg', title: '', description: '', url: '' },
// 					{ type: 'pdf', title: '', description: '', url: '' },
// 					{ type: 'document', title: '', description: '', url: '' },
// 				]
// 		}
// 	}
// }

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
	getHelpItem = async (helpID) => {
		var data = await GetHelpItem(helpID) // async/await the stuff / or make a Promise
		return data
	}


	getHelpData = (helpID) => {
		// api.get('/photos/8')
		// 	.then((response) => {
		// 		this.setState({ helpObj: response.data })
		// 	})
	}

	componentWillMount = async () => { //Delete when the API is implemented, only used to used a prepared object to test.
		var data = await this.getHelpItem(GetHelpID())
		this.setState({ helpObj: data })
	}

	onClickOutside = (e) => {
		if (this.state.openHelp) {
			if (this.node !== null && this.node !== undefined)
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
	//#region Rendering
	renderHelp = () => {

		return <HelpPopup
			small={this.props.small}
			helpID={GetHelpID()}
			innerRef={this.setHelpPopUpRef}
			helpObj={this.state.helpObj}
			openHelp={this.props.showHelp ? this.props.showHelp : this.state.openHelp}>
		</HelpPopup>

	}
	render() {
		const { small } = this.props
		console.log(small)
		return (
			small ? <React.Fragment>{this.renderHelp()}</React.Fragment>
				:
				<HelpDiv>
					<HelpButton onClick={this.openHelp}>
						<HelpIcon icon={'help'} style={{ marginRight: "0px" }} />
						{!this.props.small ? <Bold>{this.props.helpLabel}</Bold> : null}
					</HelpButton>
					{this.renderHelp()}
				</HelpDiv>
		)
	}
	//#endregion
}

Help.propTypes = {
	helpLabel: PropTypes.string,
	small: PropTypes.bool
}

Help.defaultProps = {
	helpLabel: 'Need help?'
}

export default Help
