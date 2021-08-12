import * as queryWeather from './alpha-fetch-API.js'

document.getElementById('idbtn1').addEventListener('click', async () => {
  const weatherLocation = document.getElementById('idlocation1').value

  try {
    // const forecastData = await queryWeather.getWeatherAPI(weatherLocation)
    // console.log('forecastData: ', forecastData)
    // if (forecastData.success === false) {
    //   console.log('fetch API fail', forecastData.error.info)
    //   document.getElementById('idlbl1').innerText = forecastData.error.info
    // } else {
    //   const finalData = `Location: ${forecastData.location.name}, Temperature: ${forecastData.current.temperature}, ${forecastData.current.weather_descriptions}`
    //   document.getElementById('idlbl1').innerText = finalData
    // }

    const openWeatherData = await queryWeather.openWeatherMapAPI(weatherLocation)
    if (openWeatherData.cod === 401) {
      console.log('Fetch API fail...')
      console.log(openWeatherData.message)
      document.getElementById('idlbl1').innerText = openWeatherData.message
    } else if (openWeatherData.cod === 200) {
      const finalData = `Location: ${openWeatherData.name}, Temperature(fahrenheit): ${openWeatherData.main.temp}, Description: ${openWeatherData.weather[0].description}`
      document.getElementById('idlbl1').innerText = finalData
      console.log('OpenWeatherData finished...')
    } else if (openWeatherData.cod === '404') {
      console.log('404 not found: ', openWeatherData)
      console.log(openWeatherData.message)
      document.getElementById('idlbl1').innerText = openWeatherData.message
    }
  } catch (error) {
    console.log('error2: ', error)
  }
})
