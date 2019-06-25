const base64 = require('base-64');
const Dragon = require('./index');

class Breeder {
  static breadDragon({ matron, patron }) {
    const matronTraits = matron.traits;
    const patronTraits = patron.traits;
    const babyTraits = [];

    matronTraits.map(({ traitType, traitValue }) => {
      const matronTrait = traitValue;
      const patronTrait = patronTraits.find(triat => triat.traitType === traitType).traitValue;

      babyTraits.push({ 
        traitType, 
        traitValue: Breeder.pickTrait({ matronTrait, patronTrait })
       });
    });

    return new Dragon({ nickname: 'Unname baby', traits: babyTraits });
  }

  // Two incoming traits: matronTrait, patronTrait.
  // The matronTrait and patronTrait string values are encoded.
  // Both traits have their characters summed.
  // Get a range by adding character sums.
  // Generate a random number in that range.
  // If the number is less then the matron`s character sum, pick matron else patron.
  static pickTrait({ matronTrait, patronTrait }) {
    
    if (matronTrait === patronTrait) return matronTrait;

    const matronTraitCharSum = Breeder.charSum(base64.encode(matronTrait));
    const patronTraitCharSum = Breeder.charSum(base64.encode(patronTrait));
    
    const randNum  = Math.floor(Math.random() * (matronTraitCharSum + patronTraitCharSum));

    return randNum < matronTraitCharSum ? matronTrait : patronTrait;
  }

  static charSum(string) {
    return string.split('').reduce((sum, char) => sum + char.charCodeAt(), 0)
  }
}


module.exports = Breeder;
const foobar  = new Dragon();
const gooby = new Dragon();

console.log('foobar', foobar);
console.log('gooby', gooby);

const foogooby = Breeder.breadDragon({ matron: foobar, patron: gooby });

console.log('foogooby', foogooby);