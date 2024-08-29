export type suggestionType = {
	name: string
	state: string
	country: string
	lat: number
	lon: number
}

export type forecastType = {
	name: string
	country: string
	sunrise: number
	sunset: number
	timezone: number
	list: [
		{
			dt: number
			main: { temp: number; feels_like: number; humidity: number }
			weather: [{ main: string; description: string; icon: String }]
			clouds: { all: number }
			wind: { speed: number; gust: number }
			pop: number
			dt_txt: String
			visibility: number
		},
	]
}

export type airType = {
	lat: number
	lon: number
	list: [
		{
			components: {
				co: number
				no: number
				no2: number
				o3: number
				so2: number
				pm2_5: number
				pm10: number
				nh3: number
			}
			dt: number
			main: { aqi: number }
		},
	]
}
