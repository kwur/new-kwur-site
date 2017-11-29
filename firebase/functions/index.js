const functions = require('firebase-functions');
const cors = require('cors')({origin: "http://kwur2.s3-website-us-east-1.amazonaws.com"});
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
		let timestamp = moment.tz("Etc/GMT").format('YYYY-MM-DD[T]HH:mm:ss[Z]');
		console.log("first " + timestamp)
		let When = 'now';

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

			res.setHeader("Access-Control-Allow-Origin", "http://kwur2.s3-website-us-east-1.amazonaws.com");
			res.setHeader('Content-Type', 'application/json');
			res.statusCode = 200;
			res.send(body);
		});

	});
});
