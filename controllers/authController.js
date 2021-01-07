const asyncHandler = require('express-async-handler');
const querystring = require('querystring');

module.exports = {
	login: asyncHandler(async (req, res) => {
		res.redirect(
			'https://accounts.spotify.com/authorize?' +
				querystring.stringify({
					response_type: 'code',
					client_id: process.env.SPOTIFY_CLIENT_ID,
					scope: 'user-read-private user-read-email',
					redirect_uri:
						process.env.NODE_ENV === 'production'
							? 'https://myspotify.herokuapp.com/api/auth/callback'
							: 'http://localhost:3001/api/auth/callback',
					show_dialog: true,
				})
		);
	}),

	callback: asyncHandler(async (req, res) => {
		res.cookie('spotify_auth', req.query.code, {
			expire: 24 * 60 * 60 * 1000 + Date.now(),
		});

		res.redirect(
			process.env.NODE_ENV === 'production'
				? 'https://myspotifyplay.herokuapp.com'
				: 'http://localhost:3000'
		);
	}),
};
