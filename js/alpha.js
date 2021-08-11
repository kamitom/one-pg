import * as queryWeather from './alpha-fetch-API.js'

const forecastWeather = async (inputLocationName) => {
  const data = await queryWeather.getWeatherAPI(inputLocationName)

  return data
}

document.getElementById('idbtn1').addEventListener('click', async () => {
  const weatherLocation = document.getElementById('idlocation1').value

  try {
    const forecastData = await forecastWeather(weatherLocation)
    console.log('test: ', forecastData)
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
