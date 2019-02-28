const express = require('express');
const GenerationEngine = require('./engine');

const app = express();
const engine  = new GenerationEngine();
const PORT = 3000;


engine.start();

app.get('/dragon/new', (req, res) => {
  res.json({ dragon: engine.generation.newDragon() })
});



app.listen(PORT, () => console.log(`listening on port ${PORT}`));