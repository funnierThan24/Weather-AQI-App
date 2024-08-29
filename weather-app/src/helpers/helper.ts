export function cloudiness(clouds: number) {
	if (clouds < 11) return 'little to no clouds'
	if (clouds < 26 && clouds > 10) return 'few clouds'
	if (clouds < 55 && clouds > 25) return 'scattered clouds'
	if (clouds < 85 && clouds > 54) return 'broken clouds'
	if (clouds < 101 && clouds > 84) return 'overcast clouds'
}

export function airQualityIndex(airQuality: number) {
	if (airQuality === 1) return 'Good'
	if (airQuality === 2) return 'Fair'
	if (airQuality === 3) return 'Moderate'
	if (airQuality === 4) return 'Poor'
	if (airQuality === 5) return 'Very Poor'
	else return 'no air quality Index found'
}
