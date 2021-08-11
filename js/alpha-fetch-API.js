const getLocationTemperature = async (locationName) => {
  const weatherStackApiKey = 'fakeAPIKey'
  try {
    const WeatherAPIUrl2 = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=` + locationName

    const request = await fetch(WeatherAPIUrl2)
    const data = await request.json()
    // const realData = `location: ${data.location.name}, temperature: ${data.current.temperature}, desc: ${data.current.weather_descriptions}`
    // console.log('data: ', realData)
    return data
  } catch (error) {
    console.log('Hoops! low-level errors: ', error)
  }
}

export {
  getLocationTemperature as getWeatherAPI
}
