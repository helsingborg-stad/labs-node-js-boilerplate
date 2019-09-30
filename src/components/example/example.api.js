const express = require('express');
const dal = require('./example.dal');
const { postSchema, querySchema } = require('./example.schema');
const Validator = require('../../middlewares/validator.middleware');

const routes = () => {
  const router = express.Router();

  // Here we register what endpoints we want.
  router.get('/examples', async (req, res) => {
    const response = await dal.read.posts(req, res);
    return response;
  });

  router.get('/examples/:id', async (req, res) => {
    const response = await dal.read.post(req, res);
    return response;
  });

  return router;
};

module.exports = routes;
