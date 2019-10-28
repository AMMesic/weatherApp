const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fetch = require('node-fetch')
const axios = require('axios')
const app = express()


// let city = 'uppsala,se'
const apiKey = 'e99ba8b3755cbe6c107590d664a22260'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))



app.get('/weather', async (req, res) => {
  console.log(req.params)
  // const city = req.params.city
  const city = 'stockholm,se'
  console.log(city)
const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  
 const weather_res = await fetch(uri)
 const weather_data = await weather_res.json()

 const data = {
   weather: weather_data.main.temp
 }
  res.json(data)
  // .then(res => res.json())
  // .then(data => data.main.temp)
})

module.exports = {
  app
}