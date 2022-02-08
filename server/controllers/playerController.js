const axios = require('axios');
const { HEADERS } = require('../common/constants');

module.exports = {
  async getOnePlayerById(req, res) {
    const { id } = req.params;
    axios
      .get(`${process.env.BASE_URL_API}/players/playerId/${id}`, {
        headers: HEADERS,
      })
      .then(({ data }) => res.status(200).send(data.api.players))
      .catch((error) => res.status(400).send({ message: error.message }));
  },
  async getByTeamId(req, res) {
    const { teamId } = req.params;
    axios
      .get(`${process.env.BASE_URL_API}/players/teamId/${teamId}`, {
        headers: HEADERS,
      })
      .then(({ data }) => res.status(200).send(data.api.players))
      .catch((error) => res.status(400).send({ message: error.message }));
  },
  async getByFirstName(req, res) {
    const { firstName } = req.params;
    axios
      .get(`${process.env.BASE_URL_API}/players/firstName/${firstName}`, {
        headers: HEADERS,
      })
      .then(({ data }) => res.status(200).send(data.api.players))
      .catch((error) => res.status(400).send({ message: error.message }));
  },
  async getByLastName(req, res) {
    const { lastName } = req.params;
    axios
      .get(`${process.env.BASE_URL_API}/players/lastName/${lastName}`, {
        headers: HEADERS,
      })
      .then(({ data }) => res.status(200).send(data.api.players))
      .catch((error) => res.status(400).send({ message: error.message }));
  },
};
