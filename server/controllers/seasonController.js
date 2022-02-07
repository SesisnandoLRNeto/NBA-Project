const axios = require('axios');

module.exports = {
  async index(_, res) {
    axios
      .get(`${process.env.BASE_URL_API}/seasons`, {
        headers: {
          'x-rapidapi-host': process.env.HOST_API,
          'x-rapidapi-key': process.env.KEY_API,
        },
      })
      .then(({ data }) => {
        res.status(200).send({ data });
      })
      .catch((error) => {
        res.status(403).send({ message: error.message });
      });
  },
};
