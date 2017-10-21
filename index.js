const app  = require('./src/core/boot.js')();
const port = process.env.PORT || 3001;

app.listen(port);
console.log("Scouting Backend on port " + port);