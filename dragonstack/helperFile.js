const Dragon = require('./dragon');

const Generation = require('./generation');
const generation = new Generation();

const engine  = new GenerationEngine();


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

console.log('fooey', fooey);
console.log('baloo', baloo);

setTimeout(() => {
  const mimar = generation.newDragon();
  console.log('mimar', mimar);
}, 15000);

engine.start();

setTimeout(() => engine.stop(), 20000)