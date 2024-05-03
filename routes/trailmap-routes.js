const router = require("express").Router();
const express = require('express');
const trailMapController = require('../controllers/trail_map-controller');

router.route("/trailmap")
	.get(trailMapController.getAllTrailMaps);


router.route("/trailmap/:mountain_id")
	.get(trailMapController.getTrailMap);


	module.exports = router;