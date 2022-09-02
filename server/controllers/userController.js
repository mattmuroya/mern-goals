// @desc    Creates a new user
// @route   POST /api/users
// @access  Public
module.exports.registerUser = (req, res) => {
  res.status(200).json({ message: 'Register user' });
};

// @desc    Authenticates an existing user
// @route   POST /api/users/login
// @access  Public
module.exports.loginUser = (req, res) => {
  res.status(200).json({ message: 'Login user' });
};

// @desc    Gets current authenticated user's data
// @route   GET /api/users/current
// @access  Public
module.exports.getCurrentUser = (req, res) => {
  res.status(200).json({ message: 'Current user' });
};
