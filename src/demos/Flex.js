import React, { Component } from 'react'

export default class Flex extends Component {
	render() {
		return (
			<div style={{ display: 'flex', width: '100%', height: '100px', flexFlow: 'row nowrap' }}>
				<div style={{ display: 'flex', flex: 7, background: 'inherit', color: 'white', alignItems:'center', justifyContent:'center' }} > Box Component</div>
			</div>

		)
	}
}
