import React, { Component } from 'react'
import { Input, LoginContainer, Button } from '../components/Login/LoginStyles'

export default class CustomLoginForm extends Component {
	constructor(props) {
	  super(props)

	  this.state = {
		 username: '',
		 password: ''
	  }
	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}
	submit = () => {
		this.props.login(this.state.username, this.state.password)
	}
	render() {
		// const { login } = this.props
		return (
			<LoginContainer>
				<Input name={'username'} onChange={this.handleChange} placeholder={'user'} style={{ marginBottom: '5px' }}/>
				<Input name={'password'} onChange={this.handleChange} placeholder={'password'} type={'password'} style={{ marginBottom: '5px' }}/>
				<Button hasText={true} color={'blue'} onClick={this.submit}>Log in</Button>
			</LoginContainer>

		)
	}
}
