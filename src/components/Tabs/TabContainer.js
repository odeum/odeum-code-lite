import React, { Component } from 'react'
import { TabList } from './TabStyles'
import { Route } from 'react-router-dom'

export default class TabContainer extends Component {
	render() {
		console.log(this)
		return (
			<div style={{ display: 'flex', flex: 5, height: '100%', flexFlow: 'column nowrap', margin: "5px 5px 3px 5px" }}>
				<TabList>
					{this.props.children.map((child, i) => (
						<div style={{ marginRight: 5 }} key={i}>{child.props.label}</div>
					))}
				</TabList>
				{this.props.children.map((child, i) => {
					const renderChild = () => child.props.children

					return <Route path={this.props.route + child.props.route} key={i} component={renderChild} />
				})}

			</div>
		)
	}
}
