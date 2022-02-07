require('dotenv/config');

const express = require('express');
const cors = require('cors');

const app = express();

const options = {
  origin: 'http://localhost:4200',
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Basketball api updates');
});

const SeasonRouter = require('./routers/seasonRouter');
app.use('/api/v1', SeasonRouter);

const PlayerRouter = require('./routers/playerRouter');
app.use('/api/v1', PlayerRouter);

app.listen(process.env.PORT, () =>
  console.log(`Listen the port ${process.env.PORT}`)
);
