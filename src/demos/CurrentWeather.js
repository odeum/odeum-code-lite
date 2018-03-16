import React, { Component } from 'react'
import Weather from '../components/WeatherData/Weather'

export default class Flex extends Component {
	render() {
		return (
			<div>
				<Weather location='Aalborg'/>
			</div>
		)
	}
}
