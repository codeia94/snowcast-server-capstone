const axios = require('axios');
const knex = require('knex')(require('../knexfile'));

//GET live_cam database
const index = async (_req, res) => {
	try {
		const data = await knex('live_cam');
		res.status(200).json(data);
	} catch (error) {
		res.status(400).send(`Error retrieving live cam: ${error.message}`);
	}
};

//GET all live_cam
const getAllCams = async (_req, res) => {
	try {
		const data = await knex('live_cam')
			.join('mountains', 'live_cam.mountain_id', '=', 'mountains.id')
			.select('live_cam.id', 'live_cam.mountain_id', 'live_cam.cam_url', 'live_cam.title', 'mountains.name', 'mountains.province', 'mountains.img');
		res.json(data);
	} catch (err) {
		res.json({ message: `Error retrieving all live cams: ${err}` });
	}
};

//GET live_cam by mountain_id
const getCam = async (req, res) => {
	try {
		const data = await knex('live_cam')
			.join ('mountains', 'live_cam.mountain_id', '=', 'mountains.id')
			.select('*')
			.where ('mountains.id', '=', req.params.mountain_id);
		res.json(data);	
	} catch (error) {
		res.json({ message: `Error retrieving live cam by mountain_id: ${error.message}`})
	}
};

//GET live_cam by province
const getCamByProvince = async (req, res) => {
	try {
		const data = await knex('live_cam')
			.join('mountains', 'live_cam.mountain_id', '=', 'mountains.id')
			.where('mountains.province', req.params.province)
			.select('*');
		// console.log(data);
		res.json(data);
	} catch (error) {
		console.error(error.message);
		res.json({ message: `Error retrieving live cam by province: ${error.message}`})
	}
};



module.exports = {
	index,
	getAllCams,
	getCam,
	getCamByProvince
};