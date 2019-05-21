const Joi = require('@hapi/joi');
const globalSchema = require('../../validation/global.schema');

// Generic Schema.
const genericSchema = Joi.object().keys({
  id: globalSchema.id,
});

const requestSchema = Joi.object().keys({
  id: globalSchema.id,
});

const responseSchema = Joi.object().keys({
  id: globalSchema.id,
});

module.exports = {
  genericSchema,
  requestSchema,
  responseSchema,
};
