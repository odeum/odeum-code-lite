import React, { PureComponent } from 'react'
import { MenuDiv as MenuCont, MenuHeader, IconDiv, MenuFooter, DefaultHeader } from '../MenuStyles'
import Icon from '../../utils/Icon/Icon'

class MenuDiv extends PureComponent {
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