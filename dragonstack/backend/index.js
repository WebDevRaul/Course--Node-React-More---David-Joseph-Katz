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

// setTimeout(() => {
//   const gooby = new Dragon();
//   console.log('gooby', gooby);
// }, 3000);

// console.log('mimar', mimar);
// console.log('fooey', fooey);
// console.log('baloo', baloo);