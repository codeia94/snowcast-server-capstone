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

//GET mountain by mountain id
const getMountainById = async (req, res) => {
	try {
		const mountains = await knex('mountains')
			.where('id', req.params.id)
			.first();
		res.json(mountains);
    } catch (error) {
			res.status(400).send(`Error retrieving mountains: ${error.message}`);
	}
}


//GET mountain by mountain id from heroku DB and pass lat lon params to OpenWeatherMap API to get current weather
const currentDayWeather = async (req, res) => {
	try {
			const id = req.params.id;
			const mountain = await knex('mountains').where('id', id).first();
			console.log(mountain);
			if (!mountain) {
					return res.status(404).send('Mountain not found');
			}
			const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${mountain.lat}&lon=${mountain.lon}&exclude=minutely&units=metric&appid=${process.env.WEATHER_API_KEY}`);
			//GET weather condition from response
			const weatherIcon = response.data.current.weather[0].icon;			
			const weatherIconUrl = `https://snowcast-server-df25b44e24b0.herokuapp.com/icons/${weatherIcon}.png`

			res.status(200).json({...response.data, weatherIconUrl});
	} catch (error) {
			res.status(400).send(`Error retrieving weather: ${error.message}`);
	};
}

//GET all mountains weather by province by passing lat lon params to OpenWeatherMap API to get current weather for all mountains in the province
const mountainForecastByProvince = async (req, res) => {
	try {
		const province = req.params.province;
		const mountains = await knex('mountains').where('province', province);
		const weather = [];
		for (let mountain of mountains) {
			const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${mountain.lat}&lon=${mountain.lon}&exclude=daily,hourly,minutely&units=metric&appid=${process.env.WEATHER_API_KEY}`);
			weather.push({
				name: mountain.name,
				mountain_id: mountain.id,
				weather: response.data
			});
			console.log(response.data);
		}
		res.status(200).json(weather);
	} catch (error) {
		res.status(400).send(`Error retrieving weather: ${error.message}`);
	}
}

module.exports = {
	index,
	getProvince,
	getMountainsByProvince,
	getMountainById,
	currentDayWeather,
	mountainForecastByProvince
}