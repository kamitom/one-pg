import * as queryWeather from './alpha-fetch-API.js'

document.getElementById('idbtn1').addEventListener('click', async () => {
  const weatherLocation = document.getElementById('idlocation1').value

  try {
    const forecastData = await queryWeather.getWeatherAPI(weatherLocation)
    console.log('forecastData: ', forecastData)
    if (forecastData.success === false) {
      console.log('fetch API fail', forecastData.error.info)
      document.getElementById('idlbl1').innerText = forecastData.error.info
    } else {
      const finalData = `Location: ${forecastData.location.name}, Temperature: ${forecastData.current.temperature}, ${forecastData.current.weather_descriptions}`
      document.getElementById('idlbl1').innerText = finalData
    }
  } catch (error) {
    console.log('error2: ', error)
  }
})
