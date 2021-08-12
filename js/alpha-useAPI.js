import * as queryWeather from './alpha-definitionAPI.js'

document.getElementById('idbtn1').addEventListener('click', async () => {
  const weatherLocation = document.getElementById('idlocation1').value

  try {
    await useOpenSolution(weatherLocation)

    // await useWeatherStackSolution(weatherLocation)
  } catch (error) {
    console.log('low-level error: ', error)
  }
})

const useOpenSolution = async (targetLocation) => {
  const openWeatherData = await queryWeather.openWeatherMapAPI(targetLocation)
  if (openWeatherData.cod === 401) {
    console.log('Fetch API fail...')
    console.log(openWeatherData.message)
    document.getElementById('idlbl1').innerText = openWeatherData.message
  } else if (openWeatherData.cod === 200) {
    const finalData = `Country: ${openWeatherData.sys.country}, Location: ${openWeatherData.name}, Temperature(celsius): ${openWeatherData.main.temp}, Description: ${openWeatherData.weather[0].description}`
    document.getElementById('idlbl1').innerText = finalData
    console.log('OpenWeatherData finished...')
  } else if (openWeatherData.cod === '404') {
    console.log('404 not found: ', openWeatherData)
    console.log(openWeatherData.message)
    document.getElementById('idlbl1').innerText = openWeatherData.message
  }
}

const useWeatherStackSolution = async (targetCity) => {
  const forecastData = await queryWeather.getWeatherAPI(targetCity)
  console.log('forecastData: ', forecastData)
  if (forecastData.success === false) {
    console.log('fetch API fail', forecastData.error.info)
    document.getElementById('idlbl1').innerText = forecastData.error.info
  } else {
    const finalData = `Location: ${forecastData.location.name}, Temperature: ${forecastData.current.temperature}, ${forecastData.current.weather_descriptions}`
    document.getElementById('idlbl1').innerText = finalData
  }
}
