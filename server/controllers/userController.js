const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// @desc    Creates a new user
// @route   POST /api/users
// @access  Public
module.exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error('Missing name, email, or password');
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      passwordHash,
    });
    if (user) {
      res.status(201).json({
        name: user.name,
        email: user.email,
        id: user.id,
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Authenticates an existing user
// @route   POST /api/users/login
// @access  Public
module.exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);
    if (user && passwordCorrect) {
      res.status(201).json({
        name: user.name,
        email: user.email,
        id: user.id,
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Gets current authenticated user's data
// @route   GET /api/users/current
// @access  Private
module.exports.getCurrentUser = async (req, res, next) => {
  try {
    const { id, name, email } = req.user;
    res.status(200).json({ id, name, email });
  } catch (error) {
    next(error);
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
