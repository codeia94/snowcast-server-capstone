const axios = require('axios');
const knex = require('knex')(require('../knexfile'));

//GET mountains database
const index = async (_req, res) => {
	try {
		const data = await knex('mountains');
		res.status(200).json(data);
	} catch (error) {
		res.status(400).send(`Error retrieving mountains: ${error.message}`);
	}
};


//GET /api/province
const getProvince = async (_req, res) => {
	try {
		const data = await knex('mountains').select('province').distinct();

		res.status(200).json(data);
	} catch (error) {
		res.status(400).send(`Error retrieving province: ${error.message}`);
	}
};


//GET /api/province/:province
const getMountainsByProvince = async (req, res) => {
	try {
		const province = req.params.province;
		const data = await knex('mountains').where('province', province);
		res.status(200).json(data);
	} catch (error) {
		res.status(400).send(`Error retrieving mountains: ${error.message}`);
	}
};


//GET mountain by mountain id from local DB and pass lat lon params to OpenWeatherMap API to get current weather
const currentDayWeather = async (req, res) => {
	try {
			const id = req.params.id;
			const mountain = await knex('mountains').where('id', id).first();
			// console.log(mountain);
			if (!mountain) {
					return res.status(404).send('Mountain not found');
			}
			const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${mountain.lat}&lon=${mountain.lon}&exclude=minutely&units=metric&appid=${process.env.WEATHER_API_KEY}`);
			
			//GET weather condition from response
			const weatherIcon = response.data.current.weather[0].icon;
			
			const weatherIconUrl = `http://localhost:8080/icons/${weatherIcon}.png`


			res.status(200).json({...response.data, weatherIconUrl});
	} catch (error) {
			res.status(400).send(`Error retrieving weather: ${error.message}`);
	};
}



module.exports = {
	index,
	getProvince,
	getMountainsByProvince,
	currentDayWeather
}