const express = require('express');
const matches = require('./routes/matches.js');

module.exports = function (app) {

	/*
	const router = express.Router();

	router.use(function(req, res, next) {
	    console.log('Something is happening.');
	    next();
	});
	*/

	app.get('/', function(req, res){
		res.send('hello world');
	});

	matches(app);

}