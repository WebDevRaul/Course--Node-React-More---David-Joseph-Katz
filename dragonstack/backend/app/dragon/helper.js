const pool = require('../../databasePool');
const DragonTable = require('./table');
const Dragon = require('./index');

const getDragondWithTraits = ({dragonId}) => {
  return new Promise.all([
    DragonTable.getDragon({dragonId}),
    new Promise((resolve, reject) => {
      pool.query(`
        SELECT "traitType", "traitValue" 
        FROM trait
        INNER JOIN dragonTrait ON trait.id = dragonTrait."traitId"
        WHERE dragonTrait."dragonId" = $1
      `,
        [dragonId],
        (err, response) => {
          if(err) return reject(err);
          resolve(response.rows);
        }
      )
    })
  ])
  .then(([dragon, dragonTraits]) => {
    // return new Dragon({
    //   nickname = dragon.nickname,
    //   birthdate = dragon.birthdate,
    //   generationId = dragon.generationId
    // })
    return new Dragon({...dragon, dragonId, traits: dragonTraits })
  })
  .catch(err => console.error(err));
};

module.exports = { getDragondWithTraits };