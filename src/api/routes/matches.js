const errHandler = require('../errHandler');

module.exports = function (app) {

	// Sincroniza dados
	app.post('/sync', (req, res) => {
		console.log('/sync');

		if (req.body.length == undefined || req.body.length <= 0)
			return errHandler(res, new Error('Body precisa ser o array'));

		// Busca o que já tem na lista
		global.db.collection('matches').find({}).toArray((err, results) => {
			if (err) return errHandler(res, err);
			console.log(results);

			// Pega do request aqueles dados que não estão no banco de dados
			const newMatches = req.body.filter(item => {
				for (let i = 0; i < results.length; i++) {
					if (results[i]._id === item._id) {
						return false
					}
				}
				return true
			});

			// Se não há partidas novas
			if (newMatches.length === 0)
				return res.json(results);

			console.log(newMatches);

			// Insere apenas os dados novos
			global.db.collection('matches').insert(newMatches, (err) => {
				if (err) return errHandler(res, err);

				// Retorna a lista completa do banco
				global.db.collection('matches').find({}).toArray((err, newResults) => {
					if (err) return errHandler(res, err);
					console.log(newResults);
					res.json(newResults);
				});
			});
		});
	});
}
