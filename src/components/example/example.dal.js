const axios = require('axios');
const { responseSchema } = require('./example.schema');
const { validate } = require('../../validation/validation');
const logger = require('../../utils/logger');
const jsonapi = require('../../jsonapi');
const {ResourceNotFoundError} = require('../../utils/error')

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
  // Write method for creating a resource
  try {
    const { body } = req
    // Here we handle the creation of a resource

    // In this case we create a fake response by returning the request body params.
    const convertedData = {id: "10", body: body.body, title: body.title }
    const response = jsonapi.serializer.serialize('example', convertedData);
    return response

  } catch (e) {
    console.log(e)
    const errorResponse = jsonapi.serializer.serializeError(error);
    return errorResponse;
  };
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
  post: fetchOnePost,
};


/**
 * UPDATE RESOURCE METHODS
 */

const updatePost = async (req) => {
  try {
    const { body, params } = req
    // Here we handle the creation of a resource
    // Check if resource exsists
    const testApiUrl = `https://jsonplaceholder.typicode.com/posts/${params.id}`;

    const resourceData = await client
      .get(testApiUrl);

    if (Object.keys(resourceData.data).length < 0) {
        throw new ResourceNotFoundError('This resource does not exist');
    }

    // In this case we create a fake response by returning the request body params.
    const convertedData = {id: params.id, title: body.title }
    const response = await jsonapi.serializer.serialize('example', convertedData);
    return response

  } catch (e) {
    console.log(e)
    const errorResponse = await jsonapi.serializer.serializeError(e);
    return errorResponse;
  };
};

const update = {
  post: updatePost,
};


/**
 * DELETE RESOURCE METHODS
 */

const deleteResourceMethod = (req) => {
  // Write method for deleting a resource
};

const del = {
  resource: deleteResourceMethod,
};


module.exports = {
  create,
  read,
  update,
  del,
};
