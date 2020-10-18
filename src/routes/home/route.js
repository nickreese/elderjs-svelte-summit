const fetch = require('node-fetch');
module.exports = {
  all: ({ data }) => [{ slug: '/' }],
  permalink: ({ request }) => request.slug,
  data: async ({ data }) => {
    return {};
  },
};
