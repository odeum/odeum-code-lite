import React from 'react'
import { XAxis, YAxis, Bar, 
	BarChart, Tooltip, Cell } from 'recharts'

export const WeatherChart = (props) => {
	const weatherArray = []

	props.temperatureData.map((temperatureItem, index) => {
		props.precipitationData.map((precipitationItem, i) => {
			if (index === i) {
				weatherArray[i] = Object.assign(temperatureItem, precipitationItem)
			}
			return 0
		})
		return 0
	})

	return (
		<BarChart width={600} height={300} data={weatherArray}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			<XAxis dataKey="dt_txt"/>
			<YAxis />
			<Tooltip cursor={false} content={<CustomTooltip/>} />
			<Bar dataKey="temp" fill="#CE6629">
				{
					weatherArray.map((entry, index) => (
						<Cell fill='#8884d8' key={`cell-${index}`} />
					))
				}
			</Bar>
			<Bar dataKey="temp_min" fill="#1DA493" />
			<Bar dataKey="temp_max" fill="#CEB42B" />
		</BarChart>
	)
}

const CustomTooltip = (props) => {
	let icon = '01d', temperature
	if (props.payload && props.active === true) {
		icon = props.payload[0].payload.icon
		temperature = props.payload[0].payload.temp
	}
	const imgLink = 'http://openweathermap.org/img/w/' + icon + '.png'
	return (	
		<div className="custom-tooltip" style={{ 'backgroundColor': 'rgba(255, 255, 255, 0.8)', 'padding': '10px', 'border': '1px solid #f5f5f5' }}>
			<img src={imgLink} alt='WeatherCode'/>
			<p className="description">{`${temperature} °C`}</p>
		</div>
	)
}