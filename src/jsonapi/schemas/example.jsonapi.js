const { BASE_URL } = process.env;

const formJsonApiSchema = {
  id: 'id',
  blacklist: ['question_hint', 'option_group_id'],
  links: {
    self(data) {
      return `${BASE_URL}/forms/${data.id}`;
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
