import Tab from 'components/Tabs/Tab'
import Menu from 'components/Menu/Menu'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
				<Switch>
					{/* <Route path={'/home/test2'} component={() => <div>test2</div>} />
					<Route path={'/home/test3'} component={() => <div>test3</div>} /> */}
				</Switch>
			</div>
		)
	}
}
