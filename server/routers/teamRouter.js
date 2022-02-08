const teamRouter = require('express').Router();
const teamController = require('../controllers/teamController');

teamRouter.get('/teamId/:teamid', teamController.getByTeamId);
teamRouter.get('/shortName/:shortname', teamController.getByShortName);
teamRouter.get('/nickName/:nickname', teamController.getByNickName);
teamRouter.get('/conferenceName/:confname', teamController.getByConferenceName);

module.exports = teamRouter;
