import React, { Component } from 'react'

import Workspace from 'components/Workspace/Workspace'

export default class ReactComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ha: true
		}
	}

	switch = () => this.setState({ ha: !this.state.ha })

	render() {
		return (
			<Workspace>
				{<iframe title={'phone'} width="560" height="315" src="https://www.youtube.com/embed/EVBsypHzF3U?start=170" frameBorder="0" allowFullScreen></iframe>}
			</Workspace>
		)
	}
}
