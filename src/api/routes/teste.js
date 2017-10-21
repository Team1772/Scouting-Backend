module.exports = function (app) {

	app.get('/teste', (req, res) => {
		console.log('oi!');
		global.db.collection('matches').find({}).toArray((err, results) => {
			if (err) res.json({ "message": "Deu erro" });
			console.log(results);
			res.json(results[0]);
		});
	});
}
