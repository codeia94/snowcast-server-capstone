const router = require("express").Router();
const trailMapController = require('../controllers/trail_map-controller');

router.route('/trailmap')
	.get(trailMapController.getAllTrailMaps);

router.route('/trailmap/:mountain_id')
	.get(trailMapController.getTrailMap);

router.route('/trailmap/province/:province')
	.get(trailMapController.getTrailMapByProvince);



	module.exports = router;