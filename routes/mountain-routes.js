const router = require("express").Router();
const mountainController = require('../controllers/mountain-controller');


router.route("/province")
	.get(mountainController.getProvince)

router.route("/province/:province")
	.get(mountainController.getMountainsByProvince);

router.route("/mountain/:id")
	.get(mountainController.currentDayWeather);

router.route("/mountain/mountain/:id")
	.get(mountainController.getMountainById);

router.route("/mountain/province/:province")
	.get(mountainController.mountainForecastByProvince);


module.exports = router;
