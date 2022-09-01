const goalRouter = require('express').Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

goalRouter.route('/').get(getGoals).post(setGoal);
goalRouter.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = goalRouter;
