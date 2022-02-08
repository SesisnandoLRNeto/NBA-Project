const seasonRouter = require('express').Router();
const SeasonController = require('../controllers/seasonController');

seasonRouter.get('/', SeasonController.index);

module.exports = seasonRouter;
