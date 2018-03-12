/* IE Compatibility */

import 'core-js/es6/map'
import 'core-js/es6/set'
import 'core-js/fn/string/includes'

/* End IE Compatibility */

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'
// Styling
import { RootContainer } from './AppStyles'
import { ThemeProvider } from 'styled-components'

//Sort of fallback / if theme is missing

import DefaultTheme from '../../theme/default'

/**
 * @augments {Component<{theme:object,style:object>}
 * @extends {Component}
 * @prop {theme, style} - Custom theme and Custom style on the Root Container
 */

class AppContainer extends Component {

	render() {
		let CustomTheme = this.props.theme
		let CustomStyles = this.props.style
		return (
			<Router>
				<ThemeProvider theme={CustomTheme} >
					<RootContainer style={CustomStyles ? CustomStyles : undefined}>
						{this.props.children}
					</RootContainer>
				</ThemeProvider>
			</Router>
		)
	}
}
AppContainer.propTypes = {
	theme: PropTypes.object,
	style: PropTypes.object
}
AppContainer.defaultProps = {
	theme: DefaultTheme
}
export default AppContainer