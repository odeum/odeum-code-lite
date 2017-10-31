import React, { Component } from 'react'
import Header from 'components/Header/Header'
import Menu from 'components/Menu/Menu'
import MenuItem from 'components/Menu/MenuItem/MenuItem'
export default class AppDev extends Component {
	render() {
		return (
			<div>
				<Header search={true} notifications={true} avatar={true} profile={true} />
				<Menu>
					<MenuItem style={{ width: '100%' }} name={'test'}></MenuItem>
				</Menu>
			</div>
		)
	}
}
