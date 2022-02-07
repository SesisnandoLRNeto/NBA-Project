const playerRouter = require('express').Router();
const playerController = require('../controllers/playerController');

playerRouter.get('/players/:id', playerController.getOnePlayerById);

module.exports = playerRouter;
