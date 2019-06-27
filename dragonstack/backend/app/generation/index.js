const Dragon = require('../dragon');
const { REFRESH_RATE, SECONDS } = require('../config');

const  refresRate  = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    this.accountIds = new Set();
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

  newDragon({ accountId }) {
    if (Date.now() > this.expiration) {
      throw new Error('This generation expire on ' + this.expiration);
    };
    if (this.accountIds.has(accountId)) {
      throw new Error('You already have a dragon from this generation');
    };

    this.accountIds.add(accountId);

    return new Dragon({ generationId: this.generationId });
  }
}

module.exports = Generation;