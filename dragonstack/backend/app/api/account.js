const { Router } = require('express');
const AccountTable = require('../account/table');
const { hash } = require('../account/helper');
const setSession = require('./helper');

const router = new Router();

router
  .post('/signup', (req, res, next) => {
    const { username, password } = req.body;
    const usernameHash = hash(username);
    const passwordHash = hash(password);

    AccountTable.getAccount({ usernameHash })
      .then(({ account }) => {
        if(!account) {
          return AccountTable.storeAccount({ usernameHash, passwordHash })
        } else {
          const err = new Error('This username has been allready been taken');
          err.statusCode = 409;

          throw err;
        }
      })
      .then(() => {
        setSession({ username, res });
        res.json({ message: 'success!' });
      })
      .catch(err => next(err));
  });

  // AccountTable.getAccount({ usernameHash })
  // .then(({ account }) => {
  //   if(!account) {
  //     AccountTable.storeAccount({ usernameHash, passwordHash })
  //       .then(() => res.json({ message: 'success!' }))
  //       .catch(err => next(err));
  //   } else {
  //     const err = new Error('This username has been allready been taken');
  //     err.statusCode = 409;

  //     next(err);
  //   }
  // })
  // .catch(err => next(err));


module.exports = router