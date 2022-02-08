const axios = require('axios');
const { HEADERS } = require('../common/constants');

module.exports = {
  async getByTeamId(req, res) {
    const { teamid } = req.params;
    axios
      .get(`${process.env.BASE_URL_API}/teams/teamId/${teamid}`, {
        headers: HEADERS,
      })
      .then(({ data }) => res.status(200).send(data.api.teams))
      .catch((error) => res.status(400).send({ message: error.message }));
  },
  async getByShortName(req, res) {
    const { shortname } = req.params;
    axios
      .get(`${process.env.BASE_URL_API}/teams/shortName/${shortname}`, {
        headers: HEADERS,
      })
      .then(({ data }) => res.status(200).send(data.api.teams))
      .catch((error) => res.status(400).send({ message: error.message }));
  },

  async getByNickName(req, res) {
    const { nickname } = req.params;
    axios
      .get(`${process.env.BASE_URL_API}/teams/nickName/${nickname}`, {
        headers: HEADERS,
      })
      .then(({ data }) => res.status(200).send(data.api.teams))
      .catch((error) => res.status(400).send({ message: error.message }));
  },

  async getByConferenceName(req, res) {
    const { confname } = req.params;
    axios
      .get(`${process.env.BASE_URL_API}/teams/confName/${confname}`, {
        headers: HEADERS,
      })
      .then(({ data }) => res.status(200).send(data.api.teams))
      .catch((error) => res.status(400).send({ message: error.message }));
  },
};
