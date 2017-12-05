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
// import { SetHelpID } from '../utils/HelpReducers'
class AppContainer extends Component {
	constructor(props) {
		super(props)

		// this.state = {
		// 	helpID: 100
		// }

		MenuItem.defaultProps = {
		// 	SetHelpID: this.SetHelpID,
			icon: 'menu'
		}
		// Menu.defaultProps = {
		// 	SetHelpID: this.SetHelpID
		// }

		Tab.defaultProps = {

			label: 'Tab',
			icon: 'tab'
		}
	}

	// SetHelpID = (id, e) => {
	// 	SetHelpID(id)
	// }
	render() {
		return (
			<ThemeProvider theme={this.props.theme ? this.props.theme : theme} >
				<AppDiv>
					{this.props.children}
				</AppDiv>
			</ThemeProvider>
		)
	}
}

export default AppContainer
