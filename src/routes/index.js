const express = require('express')
const app = express();

const rootRouter = require('./root');
const dnaRouter = require('./dna');

app.use(rootRouter);
app.use(dnaRouter);

module.exports = app;