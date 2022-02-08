const playerRouter = require('express').Router();
const playerController = require('../controllers/playerController');

playerRouter.get('/:id', playerController.getOnePlayerById);
playerRouter.get('/teamId/:teamId', playerController.getByTeamId);
playerRouter.get('/firstName/:firstName', playerController.getByFirstName);
playerRouter.get('/lastName/:lastName', playerController.getByLastName);

module.exports = playerRouter;
