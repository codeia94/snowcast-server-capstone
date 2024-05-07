const router = require("express").Router();
const liveCamController = require('../controllers/live_cam-controller');

router.route('/livecam')
	.get(liveCamController.getAllCams);

router.route('/livecam/:mountain_id')
	.get(liveCamController.getCam);

router.route('/livecam/province/:province')
	.get(liveCamController.getCamByProvince);

module.exports = router;