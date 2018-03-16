import React, { Component } from 'react'
import { GetWeather } from './GetData'

class Weather extends Component {
	constructor(props) {
		super(props)

		this.state = {
			weatherObj: null,
		}
	}

    componentWillMount = async () => {
    	this.setState({ weatherObj: await GetWeather(this.props.location) })
    }

    render () {
    	const { weatherObj } = this.state
    	return (
    		<div>
    			{weatherObj ? `Weather in ${weatherObj.name} , ${weatherObj.sys.country} : ${weatherObj.weather[0].main} - ${weatherObj.weather[0].description} ${weatherObj.main.temp - 273.15}  °C outside.`
    				: `Loading`}
    		</div>
    	)
    }
}

export default Weather