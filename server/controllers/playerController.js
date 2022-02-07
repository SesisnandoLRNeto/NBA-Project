const axios = require('axios');

module.exports = {
  async getOnePlayerById(req, res) {
    const { id } = req.params;

    axios
      .get(`${process.env.BASE_URL_API}/players/playerId/${id}`, {
        headers: {
          'x-rapidapi-host': process.env.HOST_API,
          'x-rapidapi-key': process.env.KEY_API,
        },
      })
      .then(({ data }) => res.status(200).send(data))
      .catch((error) => res.status(400).send({ message: error.message }));
  },
};
