/**
 * Helper function for converting knex query data to a json-api seralizable data object
 */
const createObjectFromKnexQuery = (data) => {
  return data.serialize();
};

module.exports = createObjectFromKnexQuery;
