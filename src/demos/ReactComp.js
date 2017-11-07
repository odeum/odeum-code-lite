import React, { Component } from 'react'

import Workspace from 'components/Workspace/Workspace'

class ReactComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ha: true
		}
	}

	switch = () => this.setState({ ha: !this.state.ha })

	render() {
		return (
			<Workspace helpID={this.props.helpID}>
				{<iframe 
					title={'Lady Gaga - Telephone ft. Beyoncé'} 
					width="560" 
					height="315" 
					src="https://www.youtube.com/embed/EVBsypHzF3U?start=170" 
					frameBorder="0" 
					allowFullScreen>
				</iframe>}
			</Workspace>
		)
	}
}

export default ReactComp