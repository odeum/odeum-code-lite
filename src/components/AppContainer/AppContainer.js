import 'core-js/es6/map'
import 'core-js/es6/set'
import React, { Component } from 'react'
import { AppDiv } from './AppStyles'
import { ThemeProvider } from "styled-components"
import theme from 'theme/default'
import { BrowserRouter as Router, /*  Route  */} from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

class AppContainer extends Component {

	render() {
		return (
			<Router>
				<ThemeProvider theme={this.props.theme ? this.props.theme : theme} >
					<AppDiv>
						{this.props.children}
					</AppDiv>
				</ThemeProvider>
			</Router>
		)
	}
}

export default AppContainer
