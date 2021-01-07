const router = require('express').Router();
const authController = require('../../controllers/authController');

router.route('/login').get(authController.login);
router.route('/callback').get(authController.callback);

module.exports = router;
