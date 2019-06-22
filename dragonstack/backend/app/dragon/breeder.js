const Dragon = require('./index');

class Breeder {
  static breadDragon({ matron, patron }) {
    const matronTraits = matron.traits;
    const patronTraits = patron.traits;
    const babyTraits = [];

    matronTraits.map(({ traitType, traitValue }) => {
      const matronTrait = traitValue;
      const patronTrait = patronTraits.find(triat => triat.traitType === traitType);

      babyTraits.push({ 
        traitType, 
        traitValue: Breeder.pickTrait({ matronTrait, patronTrait })
       });
    });

    return new Dragon({ nickname: 'Unname baby', traits: babyTraits });
  }
}

module.exports = Breeder;