require('dotenv/config');

const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();

const options = {
  origin: 'http://localhost:4200',
};

app.use(cors(options));
app.use(express.json());

app.get('/seasons', async (_, res) => {
  const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/seasons/',
    headers: {
      'x-rapidapi-host': process.env.HOST_API,
      'x-rapidapi-key': process.env.KEY_API,
    },
  };
  await axios
    .request(options)
    .then(({ data }) => {
      res.send({ data });
    })
    .catch((error) => {
      res.send({ message: error });
    });
});

app.listen(process.env.PORT, () =>
  console.log(`Listen the port ${process.env.PORT}`)
);
