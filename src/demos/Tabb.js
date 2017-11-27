import Tab from 'components/Tabs/Tab'
import Menu from 'components/Menu/Menu'
import React, { Component } from 'react'
export default class Tabb extends Component {
	render() {
		return (
			<div>
				<Menu label={'home'}>
					<Tab route={'/test2'} label={'Test2'}>
						Test2
					</Tab>
					<Tab route={'/test3'} label={'Test3'}>
						Test3
					</Tab>
				</Menu>
			</div>
		)
	}
}
