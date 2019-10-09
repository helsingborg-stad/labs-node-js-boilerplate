const express = require('express');

const example = require('./example/example.api');

const routes = () => {
  const router = express.Router();

  // Register route to api-layer.
  router.use('/', example());

  return router;
};

module.exports = routes;
