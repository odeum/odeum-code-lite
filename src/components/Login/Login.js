import React, { Component } from 'react'

export default class Login extends Component {
	render() {
		return (
	  <div>
				<button onClick={this.props.login}> Log me in</button>
	  </div>
		)
	}
}
