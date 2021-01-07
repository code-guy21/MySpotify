const router = require('express').Router();
const authController = require('../../controllers/authController');

router.route('/login').get(authController.login);
router.route('/callback').get(authController.callback);
router.route('/user').get(authController.currentUser);
router.route('/logout').get(authController.logout);

module.exports = router;
