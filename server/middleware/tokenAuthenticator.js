const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports.tokenAuthenticator = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (auth && auth.startsWith('Bearer ')) {
      const token = auth.substring(7);
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedToken.id).select('-passwordHash');
      next();
    } else if (!auth) {
      res.status(401);
      throw new Error('Not authorized');
    }
  } catch (error) {
    next(error);
  }
};
