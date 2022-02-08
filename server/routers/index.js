const router = require('express').Router();

const SeasonRouter = require('./seasonRouter');
const PlayerRouter = require('./playerRouter');
const TeamRouter = require('./teamRouter');

router.use('/seasons', SeasonRouter);
router.use('/players', PlayerRouter);
router.use('/teams', TeamRouter);

module.exports = router;
