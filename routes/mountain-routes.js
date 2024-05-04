const router = require("express").Router();
const mountainController = require('../controllers/mountain-controller');


//http://localhost:3000/province/
router.route("/province")
	.get(mountainController.getProvince)

//http://localhost:3000/province/BC
router.route("/province/:province")
	.get(mountainController.getMountainsByProvince);


// http://localhost:3000/province/BC/1
router.route("/mountain/:id")
	.get(mountainController.currentDayWeather);

module.exports = router;
