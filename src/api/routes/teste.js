module.exports = function (app) {

	app.get('/teste', (req, res) => {
		console.log('oi');
		res.send('Essa é a rota de teste :)');
	});
}