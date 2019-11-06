const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch');
const axios = require('axios');
const app = express();
const cors = require('cors');
const apiKey = require('./key').api_key;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client')));

app.get('/weather/:search', async (req, res) => {
  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.search}&appid=${apiKey}&units=metric`;

  const weather_res = await fetch(uri);
  const weather_data = await weather_res.json();

  const data = {
    weather: weather_data.main.temp
  };
  res.json(data);
});

module.exports = {
  app
};
