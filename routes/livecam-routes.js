const router = require("express").Router();
const liveCamController = require('../controllers/live_cam-controller');

router.route('/livecam')
	.get(liveCamController.getAllCams);
// http://localhost:8080/api/livecam/


router.route('/livecam/:mountain_id')
	.get(liveCamController.getCam);
// http://localhost:8080/api/livecam/1


router.route('/livecam/province/:province')
	.get(liveCamController.getCamByProvince);
// http://localhost:8080/api/livecam/province/BC

module.exports = router;