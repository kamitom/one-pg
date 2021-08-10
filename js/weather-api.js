// Recreate missing reference to require
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

require('dotenv').config()
const weatherStackApiKey = process.env.WeatherStackAPIKey

const request = require('postman-request')

// const sampleLocationLosAngeles = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=Los%20Angeles`
// const sampleLocationNewYork = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=New%20York`
// const sampleLocationLondon = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=London`
// const sampleLocationSapporo = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=Sapporo&language=ja`
const sampleLocationSapporo1 = `http://api.weatherstack.com/current?access_key=${weatherStackApiKey}&query=Sapporo`

let answerTemp = ''

request(sampleLocationSapporo1, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const responseJSON = JSON.parse(body)
    console.log(response.statusCode)
    console.log(responseJSON)
    console.log(responseJSON.location.name)
    console.log(responseJSON.location.timezone_id)
    console.log(responseJSON.current.temperature)
    console.log(responseJSON.current.weather_descriptions[0])

    answerTemp = `location: ${responseJSON.location.name}`
  } else {
    console.log('hoops!! Not working.')
  }
})

module.exports = answerTemp
