const express = require('express');
const app = express();

const goalRouter = require('./routes/goalRouter');

app.use('/api/goals', goalRouter);

module.exports = app;
