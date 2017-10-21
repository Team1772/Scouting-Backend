const express      = require('express');
const teste = require('./routes/teste.js');

module.exports = function (app) {

	const router = express.Router();

	router.use(function(req, res, next) {
	    console.log('Something is happening.');
	    next();
	});

	teste(app);

	app.get('/', function(req, res){
		res.send('hello world');
	});

}