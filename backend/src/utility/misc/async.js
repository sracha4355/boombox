async function start(){
	const result = await fetch
	('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
	const data = await result.json()
	return data.properties.periods[1].shortForecast
}

console.log(start())
