var express = require('express');
var router = express.Router();

var exec = require('child_process').exec,
    child;

router.get('/', function(req, res, next) {
	if (!req.query.authentication) {
		res.json({ error: true, message: 'NO AUTHENTICATION TOKEN' });
		return;
	}

	if (req.query.authentication != config.get('authenticationCode')) {
		res.json({ error: true, message: 'MISMATCHED AUTHENTICATION TOKEN'});
		return;
	}

	if (!req.query.authentication || !req.query.light || !req.query.action) {
		res.json({ error: true, message: 'MISSING REQUIRE PARAMETER'});
		return;
	}

	if (req.query.action.toUpperCase() != "ON" && req.query.action.toUpperCase() != "OFF") {
		res.json({ error: true, message: 'UNKNOWN ACTION'});
		return;	
	}

	if (req.query.light.length != 2) {
		res.json({ error: true, message: 'UNKNOWN LIGHTING MESSAGE'});
		return;
	}

	var t = req.query.light.match(/^[A-Z]{1}[0-9]{1,2}$/);

	if (t === null) {
		res.json({ error: true, message: 'UNKWNON LIGHTING MESSAGE'});
		return;
	}

	var command = "heyu " + req.query.action.toLowerCase() + " " + req.query.light;

	child = exec(command,
	  function (error, stdout, stderr) {
	    if (error !== null) {
			res.json({ error: true, message: error});
	    } else {
			res.json({ error: false, success: true});
	    }
	});

});

module.exports = router;
