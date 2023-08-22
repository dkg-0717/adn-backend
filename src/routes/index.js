const express = require('express')
const app = express();

const rootRouter = require('./root');
const dnaRouter = require('./dna');
const statsRouter = require('./stats')

app.use(rootRouter);
app.use(dnaRouter);
app.use(statsRouter)

module.exports = app;