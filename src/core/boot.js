const express    = require('express');
const bodyParser = require('body-parser');
const routeManager  = require('./../api/route-manager.js');

module.exports = function() {

  const app = express();

  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());

  routeManager(app);

  return app;
}
