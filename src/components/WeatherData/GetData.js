import { create } from 'apisauce'

const api = create({
	baseURL: 'http://api.openweathermap.org/data/2.5/'
})

export const GetWeather = async (parameter) => {
	var data
	if (typeof (parameter) === 'object' && parameter) {
		await api.get('weather?lat=' + parameter.lat + '&lon=' + parameter.lon + '&units=metric&appid=cbabea7dfe88ded04409be196b518dab')
			.then((res) => {
				if (res.ok) {
					data = res.data
				}
			})
	} else {
		await api.get('weather?q=' + parameter + '&units=metric&appid=cbabea7dfe88ded04409be196b518dab')
			.then((res) => {
				if (res.ok) {
					data = res.data
				}
			})
	}
	if (data) {
		return data
	}
}

export const GetPrecipitations = async (parameter) => {
	var data
	if (typeof (parameter) === 'object' && parameter) {
		await api.get('forecast?lat=' + parameter.lat + '&lon=' + parameter.lon + '&units=metric&appid=cbabea7dfe88ded04409be196b518dab')
			.then((res) => {
				if (res.ok) {
					data = res.data
				}
			})
	} else {
		await api.get('forecast?q=' + parameter + '&units=metric&appid=cbabea7dfe88ded04409be196b518dab')
			.then((res) => {
				if (res.ok) {
					data = res.data
				}
			})
	}
	if (data) {
		return data
	}
}