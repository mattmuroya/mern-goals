const userRouter = require('express').Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require('../controllers/userController');

userRouter.post('/', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/current', getCurrentUser);

module.exports = userRouter;
