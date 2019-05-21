const Joi = require('@hapi/joi');

// Write all your general Joi-specifications here so they can be imported to all schemas.
const id = Joi.number().integer().min(0).required();
const countryCode = Joi.string().min(2).max(2).required();

module.exports = {
  id,
  countryCode,
};
