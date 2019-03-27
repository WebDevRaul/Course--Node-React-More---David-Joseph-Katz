const { Router } = require('express');
const router = new Router();
const DragonTable = require('../dragon/table');

router.get('/new', (req, res, next) => {
  const dragon = req.app.locals.engine.generation.newDragon();

  DragonTable.storeDragon(dragon)
    .then(({dragonId}) => {
      console.log(dragonId);
      dragon.dragonId = dragonId;

      res.json({ dragon })
    })
    .catch(error => next(error))
});

module.exports = router;