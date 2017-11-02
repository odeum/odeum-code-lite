import React, { Component } from 'react'
import { IconDiv, ArrowIconDiv, Link } from './MenuStyles'
import PropTypes from 'prop-types'


export default class MenuItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false
		}
	}

	componentWillMount = () => {
		// this.setState({ active: true })
	}
	componentWillUnmount = () => {
		// this.setState({ active: false })
	}

	render() {
		return (
			<Link to={this.props.route} selected={this.props.active}>
				<IconDiv alt='Icon placeholder'>IC</IconDiv>
				{this.props.label}
				<ArrowIconDiv alt='Icon placeholder'>AR</ArrowIconDiv>
			</Link>
		)
	}
}
MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired

}