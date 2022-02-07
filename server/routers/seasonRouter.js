const seasonRouter = require('express').Router();
const SeasonController = require('../controllers/seasonController');

seasonRouter.get('/seasons', SeasonController.index);

module.exports = seasonRouter;
