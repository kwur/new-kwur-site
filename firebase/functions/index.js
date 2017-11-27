const functions = require('firebase-functions');

const cors = require('cors')({origin: "http://kwur2.s3-website-us-east-1.amazonaws.com/"});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.now_playing = functions.https.onRequest((req, res) => {
	cors(req, res, () => {

		res.writeHead(200, {"Access-Control-Allow-Origin": "http://kwur2.s3-website-us-east-1.amazonaws.com"});
		res.write("It worked.");
		res.end();
	    // [END sendResponse]
	});
});
