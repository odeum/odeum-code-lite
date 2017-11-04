import React, { Component } from 'react'
import { IconDiv, ArrowIconDiv, Link } from './MenuStyles'
import PropTypes from 'prop-types'
import { Icon } from 'odeum-ui'

export default class MenuItem extends Component {
	
	
	componentWillMount = () => {
		console.log(this.props.icon)
	}
	componentWillUnmount = () => {
		// this.setState({ active: false })
	}

	render() {
		return (
			<Link title={this.props.label} to={this.props.route} selected={this.props.active} achordeon={this.props.achordeon}>
				<IconDiv><Icon color={'white'} iconSize={20} icon={this.props.icon} style={{ marginRight: '0px' }} /></IconDiv>
				{this.props.label}
				<ArrowIconDiv ><Icon icon={'keyboard_arrow_right'} iconSize={25} color={'white'} style={{ marginRight: '0px' }}/></ArrowIconDiv>
			</Link>
		)
	}
}
MenuItem.propTypes = {
	label: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
	icon: PropTypes.string

}