import React, { Component } from 'react'

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
			<div>
				<button onClick={this.switch} >Button </button>
				<br/>{this.state.ha.toString()}
			</div>
		)
	}
}
