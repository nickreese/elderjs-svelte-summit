const fetch = require('node-fetch');

module.exports = {
  all: async ({ data }) => {
    return data.companies.map((company) => ({ slug: company.FID }));
  },

  permalink: ({ request }) => `/${request.slug}/`,
  data: async ({ request, data }) => {
    const company = data.companies.find((company) => company.FID === request.slug);

    return { company };
  },
};
