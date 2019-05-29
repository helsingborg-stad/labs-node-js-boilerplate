const express = require('express');
const dal = require('./person.dal');
const { postSchema, querySchema } = require('./person.schema');
const Validator = require('../..//middlewares/validator.middleware');

const routes = () => {
  const router = express.Router();

  // Here we register what endpoints we want.
  router.get('/fake/:id', async (req, res) => {
    try {
      // Get the parameters from the request
      const { id } = req.params;

      // Fetch data from another layer.
      const response = await dal.fetch(id);

      // Convert response to json before sending it.
      return res.json(response);
    } catch (err) {
      // Send back error in json.
      return res.status(err.status || 500).json(err);
    }
  });

  router.get('/fake', Validator(querySchema, 'query', true), async (req, res) => {
    try {
      // Fetch data from another layer.
      const response = await dal.query();

      // Convert response to json before sending it.
      return res.json(response);
    } catch (err) {
      // Send back error in json.
      return res.status(err.status || 500).json(err);
    }
  });

  router.post('/fake', Validator(postSchema, 'body', true), async (req, res) => {
    try {
      const response = await dal.post(req.body);

      return res.json(response);
    } catch (err) {
      return res.status(err.status || 500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      // Get the parameters from the request
      const { id } = req.params;

      // TODO

      // Convert response to json before sending it.
      return res.json({ person_id: id });
    } catch (err) {
      // Send back error in json.
      return res.status(err.status || 500).json(err);
    }
  });

  router.get('/', Validator(querySchema, 'query', true), async (req, res) => {
    try {
      // TODO
      return res.json(req.query);
    } catch (err) {
      // Send back error in json.
      return res.status(err.status || 500).json(err);
    }
  });

  router.post('/', Validator(postSchema, 'body', true), async (req, res) => {
    try {
      // TODO
      return res.json(req.body);
    } catch (err) {
      return res.status(err.status || 500).json(err);
    }
  });

  return router;
};

module.exports = routes;
