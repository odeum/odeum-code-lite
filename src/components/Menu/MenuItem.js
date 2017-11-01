import React, { Component } from 'react'
import { MenuItemDiv, Link } from './MenuStyles'
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
		console.log('-----this.props-----')
		console.log(this.props)
		return (
			<Link to={this.props.route} selected={this.props.active}>
				<MenuItemDiv>
					{this.props.label}
				</MenuItemDiv>
			</Link>
		)
	}
}
MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired

}