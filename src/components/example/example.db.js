const { client, extractQueryParts } = require('../../db/db.client');

const Example = () => client('example');

const reset = () => Example()
  .truncate();

const query = async (params = {}) => {
  const { where, limit } = extractQueryParts(params);

  return Example()
    .select()
    .where(where)
    .limit(limit || 10);
};

const create = entity => Example()
  .insert(entity);

module.exports = {
  reset,
  query,
  create,
};
