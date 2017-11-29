import React, { Component } from 'react'

export default class Flex extends Component {
	render() {
		return (
			<div style={{ display: 'flex', width:'100%', height:'100px', flexFlow:'row nowrap' }}>
				<div style={{ display: 'flex', flex: 1, background: 'red' }} >Box 1</div>
				<div style={{ display: 'flex', flex: 3, background: 'green' }} >Box 2</div>
				<div style={{ display: 'flex', flex: 5, background: 'yellow' }} >Box 3</div>
				<div style={{ display: 'flex', flex: 7, background: 'blue' }} > Box 4</div>
			</div>
		)
	}
}
