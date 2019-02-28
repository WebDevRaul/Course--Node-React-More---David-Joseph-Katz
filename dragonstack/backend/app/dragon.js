const TRAITS = require('../data/traits');

const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  get birthdate() {
    return new Date()
  },
  get randomTraits() {
    const traits = [];

    TRAITS.map(i => {
      const traitType = i.type;
      const traitValues = i.values;

      // Pick a random traitValue
      const traitValue = traitValues[
        Math.floor(Math.random() * traitValues.length)
      ];

      // Push to traits array
      traits.push({ traitType, traitValue })
    });

    return traits;
  },
}

class Dragon {
  constructor({ birthdate, nickname, traits } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }
}

module.exports = Dragon;