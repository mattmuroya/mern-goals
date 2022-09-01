const Goal = require('../models/goal');

// @desc    Gets a list of all goals
// @route   GET /api/goals/
// @access  Private
module.exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (error) {
    next(error);
  }
};

// @desc    Creates a new goal
// @route   POST /api/goals/
// @access  Private
module.exports.setGoal = async (req, res, next) => {
  try {
    if (!req.body.text) {
      res.status(400);
      throw new Error('please add goal text');
    }
    const goal = await Goal.create({
      text: req.body.text,
    });
    res.status(201).json(goal);
  } catch (error) {
    next(error);
  }
};

// @desc    Updates a specific goal by id
// @route   PUT /api/goals/:id
// @access  Private
module.exports.updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      res.status(404);
      throw new Error('goal not found');
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
module.exports.deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      res.status(404);
      throw new Error('goal not found');
    }
    await goal.remove();
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
};
