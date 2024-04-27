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


//GET /api/mountain
const getMountainsByProvince = async (req, res) => {
	try {
			const province = req.params.province;
			const data = await knex('mountains').where('province', province);
			res.status(200).json(data);
	} catch (error) {
			res.status(400).send(`Error retrieving mountains: ${error.message}`);
	}
};



module.exports = {
	index,
	getProvince,
	getMountainsByProvince
}