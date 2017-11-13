import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

const RoutDemoConst = () => {
	return <div>Route Demo</div>
}
export default class RouteDemo extends Component {
	render() {
		return (
			<div>
				<Link to={'/child/overflow/routedemo'}> Link </Link>
				<Route path={'/child/overflow/routedemo'} component={RoutDemoConst} />
				{this.props.children}
			</div>
		)
	}
}
