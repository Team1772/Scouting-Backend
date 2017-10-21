module.exports = function (app) {

	app.get('/teste', (req, res) => {
		console.log('oi');
		global.db.collection('matches').find({}, (err, results) => {
			if (err) res.json({ "message": "Deu erro" });
			res.json(results[0]);
		});
	});
}
