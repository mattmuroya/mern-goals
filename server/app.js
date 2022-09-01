const express = require('express');
const app = express();

const goalRouter = require('./routes/goalRouter');

const { errorHandler } = require('./middleware/errorHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRouter);

app.use(errorHandler);

module.exports = app;
