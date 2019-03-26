const pool = require('../../databasePool');
const DragonTable = require('./table');

const getDragondWithTraits = ({dragonId}) => {
  return new Promise.all([
    DragonTable.getDragon({dragonId})
  ]); 
};