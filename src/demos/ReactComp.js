import React, { Component } from 'react'
import { Button } from 'odeum-ui'

// import Workspace from 'components/Workspace/Workspace'


class ReactComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showVideo: false,
			helpID: 100
		}
	}

	switch = () => this.setState({ showVideo: !this.state.showVideo })
	// componentWillMount = () => {
	//   this.props.setHelpId(this.state.helpID)
	// }
	setHelp = () => {
		// this.props.setHelpId(this.state.helpID)
	}
	render() {
		return (
			<div>
				<Button
					label={'Show video: ' + String(this.state.showVideo).toLowerCase()}
					icon={'play_circle_outline'}
					color={'#25B89A'}
					onClick={this.switch}
				/>
				<div>
					{this.state.showVideo && <iframe
						title={'Lady Gaga - Telephone ft. Beyoncé'}
						width="560"
						height="315"
						src="https://www.youtube.com/embed/EVBsypHzF3U?start=170"
						frameBorder="0"
						allowFullScreen>
					</iframe>}

				</div>
			</div>
		)
	}
}
// mapDispatchToProps (helpID) {
// 	setHelpId(helpID)
// }
export default ReactComp