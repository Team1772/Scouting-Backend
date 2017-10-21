const app  = require('./src/core/boot.js')();
const port = process.env.PORT || 8080;

require('./src/core/database.js')(/* É preciso inserir o banco de dados aqui. */);

app.listen(port);
console.log("Scouting Backend on port " + port);