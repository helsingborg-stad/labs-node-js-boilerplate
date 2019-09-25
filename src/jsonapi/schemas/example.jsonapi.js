const { BASE_URL } = process.env;

/**
 * Schema
 * A schema should define a single resource that we want to return as a response.
 */

const formJsonApiSchema = {
  id: 'id',
  blacklist: [], // blacklist keys that you don't want to show in the reponse object.
  links: {
    self(data) {
      return `${BASE_URL}/example/${data.id}`; //
    },
  },
  relationships: {
    questions: {
      type: 'example',
      links(data) {
        return {
          self: `${BASE_URL}/example/${data.id}`,
          related: `${BASE_URL}/example/${data.id}`,
        };
      },
    },
  },
  topLevelMeta(data, extraData) {
    return {
      count: extraData.count,
      total: data.length,
    };
  },
  topLevelLinks: {
    self: '/example/',
  },
};

module.exports = formJsonApiSchema;
