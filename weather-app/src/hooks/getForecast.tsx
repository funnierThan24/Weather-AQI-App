import { useState, useEffect, ChangeEvent } from 'react'
import { suggestionType, forecastType, airType } from '../types'

function getForecast() {
	//holds user input
	const [term, setTerm] = useState<string>('')

	//name of selected city
	const [city, setCity] = useState<suggestionType | null>(null)

	//holds suggested cities from geocode API
	const [suggestions, setSuggestions] = useState<[]>([])

	//holds forecast and air quality
	const [forecast, setForecast] = useState<forecastType | null>(null)
	const [airQ, setAirQ] = useState<airType | null>(null)

	//update search bar
	function updateSearch(e: ChangeEvent<HTMLInputElement>) {
		const val = e.target.value
		setTerm(val)

		if (val === '') return
		fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${val.trim()}&limit=5&appid=${import.meta.env.VITE_WEATHER_APP_API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => setSuggestions(data))
	}

	//define type for suggestion in ./types
	function getLocation(suggestion: suggestionType) {
		setCity(suggestion)
	}

	function onSearch() {
		if (!city) return

		getForecast(city)
		getAirQuality(city)
	}

	function getForecast(suggestion: suggestionType) {
		fetch(
			`http://api.openweathermap.org/data/2.5/forecast?lat=${suggestion.lat}&lon=${suggestion.lon}&units=imperial&appid=${import.meta.env.VITE_WEATHER_APP_API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				const weatherData = { ...data.city, list: data.list }
				setForecast(weatherData)
			})
	}

	function getAirQuality(suggestion: suggestionType) {
		fetch(
			`http://api.openweathermap.org/data/2.5/air_pollution?lat=${suggestion.lat}&lon=${suggestion.lon}&appid=${import.meta.env.VITE_WEATHER_APP_API_KEY}`
		)
			.then((res2) => res2.json())
			.then((data2) => {
				const airData = { ...data2.coord, list: data2.list }
				setAirQ(airData)
			})
	}

	useEffect(() => {
		if (city) {
			setTerm(city.name)
			setSuggestions([])
		}
	}, [city])

	return {
		term,
		suggestions,
		forecast,
		airQ,
		onSearch,
		getLocation,
		updateSearch,
	}
}

export default getForecast
