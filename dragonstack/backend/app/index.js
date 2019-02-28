const express = require('express');
const GenerationEngine = require('./generation/engine');

const dragonRouter = require('./api/dragons');
const generationRouter = require('./api/generation');

const app = express();

const engine  = new GenerationEngine();
app.locals.engine = engine;


app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter)

engine.start();

engine.stop()

module.exports = app;