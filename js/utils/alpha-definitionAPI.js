// weatherstack solution
const getLocationTemperature = async (locationName) => {
  const weatherStackApiKey = 'fakerAPIKEY'
  const securityLocation = encodeURIComponent(locationName)
  try {
    const WeatherAPIUrl2 = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=` + securityLocation

    const request = await fetch(WeatherAPIUrl2)
    const data = await request.json()
    // const realData = `location: ${data.location.name}, temperature: ${data.current.temperature}, desc: ${data.current.weather_descriptions}`
    // console.log('data: ', realData)
    return data
  } catch (error) {
    console.log('Hoops! low-level errors: ', error)
  }
}

// openweathermap solution
const getOpenWeatherMapAPI = async (openLocation) => {
  console.log('OpenWeatherData processing...')
  const securityOpenLocation = encodeURIComponent(openLocation)
  const openApiKey = 'fakeAPIkey'
  const openUrl = `https://api.openweathermap.org/data/2.5/weather?q=${securityOpenLocation}&units=metric&appid=${openApiKey}`

  try {
    const rq = await fetch(openUrl)
    const openData = await rq.json()
    return openData
  } catch (error) {
    console.log('low-level Error: ', error)
  }
}

export {
  getLocationTemperature as getWeatherAPI,
  getOpenWeatherMapAPI as openWeatherMapAPI
}
