const Goal = require('../models/goal');
const User = require('../models/user');

// @desc    Gets a list of all goals
// @route   GET /api/goals
// @access  Private
module.exports.getGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
  } catch (error) {
    next(error);
  }
};

// @desc    Creates a new goal
// @route   POST /api/goals
// @access  Private
module.exports.setGoal = async (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400);
      throw new Error('Please add goal text');
    }
    const goal = await Goal.create({
      text,
      user: req.user.id,
    });
    if (goal) {
      res.status(201).json(goal);
    } else {
      res.status(400);
      throw new Error('Invalid goal data');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Updates a specific goal by id
// @route   PUT /api/goals/:id
// @access  Private
module.exports.updateGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      res.status(404);
      throw new Error('goal not found');
    }
    if (req.user.id !== goal.user.toString()) {
      res.status(401);
      throw new Error('Not authorized');
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedGoal);
  } catch (error) {
    next(error);
  }
};

// @desc    Deletes a specific goal by id
// @route   DELETE /api/goals/:id
// @access  Private
module.exports.deleteGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      res.status(404);
      throw new Error('goal not found');
    }
    if (req.user.id !== goal.user.toString()) {
      res.status(401);
      throw new Error('Not authorized');
    }
    await goal.remove();
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};
