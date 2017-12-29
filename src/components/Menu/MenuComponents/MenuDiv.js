import React, { Component } from 'react'
import { MenuDiv as MenuCont, MenuHeader, IconDiv } from '../MenuStyles'
import { Icon } from 'odeum-ui'

class MenuDiv extends Component {
	constructor(props) {
		super(props)
		this.state = {
			achordeon: true
		}
	}

	switch = () => (
		this.setState({ achordeon: !this.state.achordeon })
	)

	render() {
		console.log(this.props.top)
		return (
			<MenuCont achordeon={this.state.achordeon}>
				<MenuHeader>
					{this.props.top === undefined ? <IconDiv onClick={this.switch}
						style={{ cursor: 'pointer' }}>
						<Icon icon={'menu'} iconSize={20} color={'white'} style={{ marginRight: '0px' }} />
					</IconDiv> : this.props.top}
				</MenuHeader>
				{this.props.children}
			</MenuCont>
		)
	}
}


export default MenuDiv