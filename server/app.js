const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');

const goalRouter = require('./routes/goalRouter');
const userRouter = require('./routes/userRouter');
const { errorHandler } = require('./middleware/errorHandler');

// DATABASE CONNECTION
(async () => {
  try {
    const con = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
})();

// REQUEST PROCESSORS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// REQUEST ROUTERS
app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);

// ERROR HANDLER
app.use(errorHandler);

module.exports = app;
