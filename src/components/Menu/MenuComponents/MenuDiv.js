import React, { Component } from 'react'
import { MenuDiv as MenuCont, MenuHeader, IconDiv, MenuFooter, DefaultHeader } from '../MenuStyles'
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
		// console.log('Top', this.props.top)
		// console.log('Bottom', this.props.bottom)
		return (
			<MenuCont achordeon={this.state.achordeon}>
				
				{this.props.top.length === 0 ? <DefaultHeader>
					<IconDiv onClick={this.switch}
						style={{ cursor: 'pointer', alignSelf: 'left' }}>
						<Icon icon={'menu'} iconSize={20} color={'white'} style={{ marginRight: '0px' }} />
					</IconDiv> 
				</DefaultHeader>
					: <MenuHeader>{this.props.top}</MenuHeader>}
				
				{this.props.children}
				<MenuFooter>
					{this.props.bottom ? this.props.bottom : null}
				</MenuFooter>
			</MenuCont>
		)
	}
}


export default MenuDiv