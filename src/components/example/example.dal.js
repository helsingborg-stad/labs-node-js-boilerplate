const axios = require('axios');
const { responseSchema } = require('./example.schema');
const { validate } = require('../../validation/validation');
const logger = require('../../utils/logger');
const jsonapi = require('../../jsonapi');

// Client for requesting thirdparty apis.
const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});


/**
 * CREATE RESOURCE METHODS
 */

const createPost = async (req) => {
  // Method for creating a resource (in this case a post request towards the testapi)
};

const create = {
  post: createPost,
};


/**
 * READ RESOURCE METHODS
 */

const fetchAllPosts = async (req) => {
  // Write method for reading a resource (in this case a get request towards the testapi)
  try {
    const testApiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const resourceData = await client
      .get(testApiUrl);

    const convertData = jsonapi.convert.apiResponse(resourceData);
    const response = jsonapi.serializer.serialize('example', convertData);

    return response;
  } catch (error) {
    logger.error(error);
    const errorResponse = await jsonapi.serializer.serializeError(error);
    return errorResponse;
  }
};

const fetchOnePost = async (req) => {
  // Write method for reading a resource (in this case a get request towards the testapi)
  try {
    const { id } = req.params
    const testApiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const resourceData = await client
      .get(testApiUrl);

    const convertData = jsonapi.convert.apiResponse(resourceData);
    const response = jsonapi.serializer.serialize('example', convertData);

    return response;
  } catch (error) {
    logger.error(error);
    const errorResponse = await jsonapi.serializer.serializeError(error);
    return errorResponse;
  }
};

const read = {
  posts: fetchAllPosts,
  post: fetchOnePost
};


/**
 * UPDATE RESOURCE METHODS
 */

const updatePost = (req) => {
  // Write method for updating the resource
};

const update = {
  posts: updatePost,
};


/**
 * DELETE RESOURCE METHODS
 */

const deletePost = (req) => {
  // Write method for deleting a resource
};

const del = {
  post: deletePost,
};


module.exports = {
  create,
  read,
  update,
  del,
};
