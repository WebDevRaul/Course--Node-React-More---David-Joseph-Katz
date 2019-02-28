const Dragon = require('./dragon');

const fooey = new Dragon({
  birthdate:new Date(),
  nickname: 'fooey'
});
const baloo = new Dragon({
  birthdate: new Date(),
  nickname: 'baloo',
  traits: [{
    traitType: 'backgroundColor', traitValue: 'green'
  }]
});

const mimar = new Dragon();