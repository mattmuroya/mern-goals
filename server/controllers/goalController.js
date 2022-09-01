// @desc    Gets a list of all goals
// @route   GET /api/goals/
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'get goals' });
};

// @desc    Creates a new goal
// @route   POST /api/goals/
// @access  Private
const setGoal = (req, res) => {
  res.status(200).json({ message: 'set goal' });
};

// @desc    Updates a specific goal by id
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
};

// @desc    Deletes a specific goal by id
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
