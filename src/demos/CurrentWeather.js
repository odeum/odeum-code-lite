import React, { Component } from 'react'
import { GetWeather, GetPrecipitations } from '../components/WeatherData/GetData'
import { WeatherChart } from 'components/WeatherData/DrawGraph'

export default class Flex extends Component {
	constructor(props) {
		super(props)

		this.state = {
			location: 'Aalborg',
			weatherData: null,
			precipitationData: null,
			temperatureData: null,
		}
	}

	getWeatherData = async (location) => {
		return await GetWeather(location)
	}

	getPrecipitationData = async (location) => {
		return await GetPrecipitations(location)
	}

	setArea = async (event) => {
		event.preventDefault()
		const location = event.currentTarget.location.value
		const weatherArray = []
		const temperatureArray = []
		const today = new Date()
		const date = today.getFullYear() + '-' + (today.getMonth() > 9 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1)) + '-' + today.getDate()

		await this.getWeatherData(location)
			.then((res) => {
				this.setState({
					weatherData: res,
				})
			})
		await this.getPrecipitationData(location)
			.then((res) => {
				for (let i = 0; i < res.list.length; i++) {
					if (res.list[i].dt_txt.substring(0, 10) === date) {
						weatherArray.push(res.list[i].weather[0])
						temperatureArray.push(res.list[i].main)
					}
				}
			}, (err) => {
				console.log(err)
			})
		if (weatherArray && temperatureArray) {
			this.setState({
				precipitationData: weatherArray,
				temperatureData: temperatureArray
			})
		}
	}

	render() {
		const { weatherData, precipitationData, temperatureData } = this.state
		return (
			<div>
				<form onSubmit={this.setArea}>
					Area name: <input type="text" name="location" />
					<input type="submit" value="Submit" />
				</form>
				<div>
					{weatherData ? `Weather in ${weatherData.name} , ${weatherData.sys.country} : ${weatherData.weather[0].main} - ${weatherData.weather[0].description} ${weatherData.main.temp}  °C outside.`
						: ``}
					{precipitationData && temperatureData ? 
						<div id="container">
							<WeatherChart precipitationData={precipitationData} temperatureData={temperatureData} />
						</div> : ''}
				</div>
			</div>
		)
	}
}