const pool = require('../databasePool');
const TRAITS = require('../data/traits');

TRAITS.map(i => {
  const traitType = i.type;
  const traitValues = i.values;

  traitValues.map(value => {
    pool.query(
      `INSERT INTO trait("traitType", "traitValue")
       VALUES($1, $2)
       RETURNING id
      `,
      [traitType, value],
      (error, response) => {
        if (error) return console.error(error);
        const traitId = response.rows[0].id;

        console.log(`Inserted trait - id: ${traitId}`);
      }
    )
  });
});