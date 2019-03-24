const Dragon = require('../dragon');
const { REFRESH_RATE, SECONDS } = require('../config');

const  refresRate  = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
    this.generationId = undefined;
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refresRate/2));
    const msUntilExpiration  = Math.random() < 0.5 ?
      refresRate - expirationPeriod :
      refresRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  newDragon() {
    if (Date.now() > this.expiration) {
      throw new Error('This generation expire on ' + this.expiration);
    }
    return new Dragon({ generationId: this.generationId });
  }
}

module.exports = Generation;