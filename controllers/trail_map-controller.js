const axios = require('axios');
// const express = require('express');
const knex = require('knex')(require('../knexfile'));

//GET trail_map database
const index = async (_req, res) => {
	try {
		const data = await knex('trail_map');
		res.status(200).json(data);
	} catch (error) {
		res.status(400).send(`Error retrieving trail map: ${error.message}`);
	}
};

//GET all trail_map
const getAllTrailMaps = async (_req, res) => {
  try {
    const data = await knex('trail_map')
      .join('mountains', 'trail_map.mountain_id', '=', 'mountains.id')
      .select('trail_map.id', 'trail_map.mountain_id', 'trail_map.trailmap', 'trail_map.trail_name', 'mountains.name', 'mountains.lat', 'mountains.lon', 'mountains.province', 'mountains.img');
    res.json(data);
  } catch (err) {
    res.json({ message: `Error retrieving all trail maps: ${err}` });
  }
};


//GET trail_map by mountain_id
const getTrailMap = async (req, res) => {
	try {
		const data = await knex('trail_map')
			.join ('mountains', 'trail_map.mountain_id', '=', 'mountains.id')
			.select('*')
			.where ('mountains.id', '=', req.params.mountain_id);
		res.json(data);	
	} catch (error) {
		res.json({ message: `Error retrieving trail map by mountain_id: ${error.message}`})
	}
};


//GET trail_map by province
const getTrailMapByProvince = async (req, res) => {
	try {
		const data = await knex('trail_map')
			.join('mountains', 'trail_map.mountain_id', '=', 'mountains.id')
			.where('mountains.province', req.params.province)
			.select('*');
		// console.log(data);
		res.json(data);
	} catch (error) {
		console.error(error.message);
		res.json({ message: `Error retrieving trail map by province: ${error.message}`})
	}
};

module.exports = {
	index,
	getAllTrailMaps,
	getTrailMap,
	getTrailMapByProvince
};