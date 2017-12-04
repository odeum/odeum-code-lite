import 'core-js/es6/map'
import 'core-js/es6/set'
import React, { Component } from 'react'
import { AppDiv } from './AppStyles'
import { ThemeProvider } from "styled-components"
import theme from 'theme/default'
import Footer from '../Footer/Footer'
import Tab from '../Tabs/Tab'
import Workspace from '../Workspace/Workspace'
import MenuItem from '../Menu/MenuComponents/MenuItem'
import Menu from '../Menu/Menu'
class AppContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			helpID: 100
		}
		Workspace.defaultProps = {
			SetHelpID: this.SetHelpID
		}
		MenuItem.defaultProps = {
			SetHelpID: this.SetHelpID,
			icon: 'menu'
		}
		Menu.defaultProps = {
			SetHelpID: this.SetHelpID
		}

		Tab.defaultProps = {

			label: 'Tab',
			icon: 'tab'
		}
	}

	SetHelpID = (id, e) => {
		// console.log(id, e)
		return id === this.state.helpID ? null : this.setState({ helpID: id })
	}
	render() {
		return (
			<ThemeProvider theme={this.props.theme ? this.props.theme : theme} >
				<AppDiv>
					{this.props.children.map((child, index) => {
						if (child.type === Footer)
							return React.cloneElement(child, { key: index, helpID: this.state.helpID })
						else
							return React.cloneElement(child, { key: index })
					})}
				</AppDiv>
			</ThemeProvider>
		)
	}
}

export default AppContainer
