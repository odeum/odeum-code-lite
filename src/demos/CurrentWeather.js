import React, { Component } from 'react'
import { GetWeather } from '../components/WeatherData/GetData'

export default class Flex extends Component {
	constructor(props) {
		super(props)

		this.state = {
			location: 'Aalborg',
			data: null,
		}

		this.getData = this.getData.bind(this)
	}

	getData = async (location) => {
		return await GetWeather(location)
	}

	setArea = async (event) => {
		event.preventDefault()
		await this.getData(event.currentTarget.location.value)
			.then((res) => {
				this.setState({
					data: res,
				})
			})
	}

	render() {
		const { data } = this.state
		return (
			<div>
				<form onSubmit={this.setArea}>
					Area name: <input type="text" name="location" />
					<input type="submit" value="Submit" />
				</form>
				<div>
					{data ? `Weather in ${data.name} , ${data.sys.country} : ${data.weather[0].main} - ${data.weather[0].description} ${data.main.temp - 273.15}  °C outside.`
						: ``}
				</div>
			</div>
		)
	}
}
