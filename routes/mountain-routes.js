const router = require("express").Router();
const express = require('express');
const mountainController = require('../controllers/mountain-controller');

router.route("/province")
	.get(mountainController.getProvince)

router.route("/province/:province")
	.get(mountainController.getMountainsByProvince);


	

module.exports = router;
