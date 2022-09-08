const userRouter = require('express').Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require('../controllers/userController');

const { tokenAuthenticator } = require('../middleware/tokenAuthenticator');

userRouter.post('/', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/current', tokenAuthenticator, getCurrentUser);

module.exports = userRouter;
