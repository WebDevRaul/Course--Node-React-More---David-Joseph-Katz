const TRIATS = require('../../data/traits')

const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  generationId: undefined,
  get birthdate() {
    return new Date()
  },
  get randomTraits() {
    const traits = [];
    TRIATS.map(i => {
      const traitType = i.type;
      const traitValues = i.values;

      const  traitValue = traitValues[
        Math.floor(Math.random() * traitValues.length)
      ];
      traits.push({ traitType, traitValue });
    });

    return traits;
  }
};

class Dragon {
  constructor( {birthdate, nickname, traits, generationId} = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
  }
}

module.exports  = Dragon;