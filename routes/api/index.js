const router = require('express').Router();

router.route('/api').get((req, res) => {
	res.send('MySpotify API');
});

module.exports = router;
