const axios = require('axios');
const { axiosOptions } = require('../../utils/constants');
const { responseSchema } = require('./example.schema');
const { validate } = require('../../validation/validation');
const logger = require('../../utils/logger');
const jsonapi = require('../../jsonapi');
const { throwCustomDomainError } = require('../../utils/error')

const createErrorResponse = async (error, res) => {
  logger.error(error);
  const serializedData = await jsonapi.serializer.serializeError(error);
  return res.status(error.status).json(serializedData);
};

const createSuccessResponse = async (data, res, jsonapiType, converter) => {
  const convertData = await jsonapi.convert[converter](data);
  const serializedData = await jsonapi.serializer.serialize(jsonapiType, convertData);
  return res.json(serializedData)
};

const tryAxiosRequest = async (callback) => {
  try {
    const response = await callback()
    return response
  } catch (error){
    throwCustomDomainError(error.response.status)
  }
};


/**
 * CREATE RESOURCE METHODS
 */

const createPost = async (req, res) => {
  // Method for creating a resource (in this case a post request towards the testapi)
};

const create = {
  post: createPost,
};


/**
 * READ RESOURCE METHODS
 */

const fetchAllPosts = async (req, res) => {
  // Write method for reading a resource (in this case a get request towards the testapi)
  try {
    const testApiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const resourceData = await tryAxiosRequest( callback = () => axios.get(testApiUrl, axiosOptions));

    return createSuccessResponse(resourceData, res, 'example', 'apiResponse');
  } catch (error) {
    return createErrorResponse(error, res)
  }
};

const fetchOnePost = async (req, res) => {
  // Write method for reading a resource (in this case a get request towards the testapi)
  try {
    const { id } = req.params
    const testApiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const resourceData = await tryAxiosRequest( callback = () => axios.get(testApiUrl, axiosOptions) );

    return await createSuccessResponse(resourceData, res, 'example', 'apiResponse');
  } catch (error) {
    return await createErrorResponse(error, res)
  }
};

const read = {
  posts: fetchAllPosts,
  post: fetchOnePost
};


/**
 * UPDATE RESOURCE METHODS
 */

const updatePost = (req, res) => {
  // Write method for updating the resource
};

const update = {
  posts: updatePost,
};


/**
 * DELETE RESOURCE METHODS
 */

const deletePost = (req, res) => {
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
