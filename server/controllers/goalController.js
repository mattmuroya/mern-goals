// @desc    Gets a list of all goals
// @route   GET /api/goals/
// @access  Private
module.exports.getGoals = async (req, res) => {
  try {
    res.status(200).json({ message: 'get goals' });
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
    res.status(200).json({ message: 'set goal' });
  } catch (error) {
    next(error);
  }
};

// @desc    Updates a specific goal by id
// @route   PUT /api/goals/:id
// @access  Private
module.exports.updateGoal = async (req, res) => {
  try {
    res.status(200).json({ message: `update goal ${req.params.id}` });
  } catch (error) {
    next(error);
  }
};

// @desc    Deletes a specific goal by id
// @route   DELETE /api/goals/:id
// @access  Private
module.exports.deleteGoal = async (req, res) => {
  try {
    res.status(200).json({ message: `delete goal ${req.params.id}` });
  } catch (error) {
    next(error);
  }
};
