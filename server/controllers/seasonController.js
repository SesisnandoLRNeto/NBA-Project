const axios = require('axios');
const { HEADERS } = require('../common/constants');

module.exports = {
  async index(_, res) {
    axios
      .get(`${process.env.BASE_URL_API}/seasons/`, {
        headers: HEADERS,
      })
      .then(({ data }) => res.status(200).send(data))
      .catch((error) => res.status(403).send({ message: error.message }));
  },
};
