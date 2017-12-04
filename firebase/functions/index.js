const functions = require('firebase-functions');
const cors = require('cors')({origin: "http://kwur.org/*"});
const request = require('request');
const crypto = require('crypto');
const moment = require('moment-timezone');
const config = require('./config.json');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.now_playing = functions.https.onRequest((req, res) => {
	cors(req, res, () => {

		let method = 'getRegularShowsInfo';
		let papiuser = config.spinitron.key;
		let papiversion = '2';
		let station = 'kwur';

		// MUST be in format 2017-11-29T19:26:00Z
		let timestamp = moment.tz("Etc/GMT").format('YYYY-MM-DD[T]HH:mm:ss[Z]');
		let When = 'now';

		// These have to be in alphabetical order
		let query = "method=" + encodeURIComponent(method) +
					"&papiuser=" + encodeURIComponent(papiuser) +
					"&papiversion=" + encodeURIComponent(papiversion) +
					"&station=" + encodeURIComponent(station) +
					"&timestamp=" + encodeURIComponent(timestamp) +
					"&When=" + encodeURIComponent(When);

		var hmac = crypto.createHmac('sha256', config.spinitron.secret);
		hmac.update('spinitron.com\n/public/spinpapi.php\n' + query);
		let signature = hmac.digest('base64');
		
		let url = "http://spinitron.com/public/spinpapi.php?" + query + "&signature=" + encodeURIComponent(signature);

		request(url, function(err, response, body) { 

			res.setHeader("Access-Control-Allow-Origin", "http://kwur.org");
			res.setHeader('Content-Type', 'application/json');
			res.statusCode = 200;
			res.send(body);
		});

	});
});
