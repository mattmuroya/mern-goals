const goalRouter = require('express').Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

const { tokenAuthenticator } = require('../middleware/tokenAuthenticator');

goalRouter
  .route('/')
  .get(tokenAuthenticator, getGoals)
  .post(tokenAuthenticator, setGoal);
goalRouter
  .route('/:id')
  .put(tokenAuthenticator, updateGoal)
  .delete(tokenAuthenticator, deleteGoal);

module.exports = goalRouter;
