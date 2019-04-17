const { Router } = require('express');
const AccountTable = require('../account/table');
const Session = require('../account/session');
const { hash } = require('../account/helper');
const { setSession } = require('./helper');

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
        return setSession({ username, res });
      })
      .then(({ message }) => {
        res.json({ message });
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

  router
    .post('/login', (req, res, next) => {
      const { username, password } = req.body;

      AccountTable.getAccount({ usernameHash: hash(username) })
        .then(({ account }) => {
          if(account && account.passwordHash === hash(password)) {
            const { sessionId } = account;
            return setSession({ username, res, sessionId })
          }else{
            const err = new Error('Incorect username/password');
            err.statusCode = 409;
            throw err;
          }
        })
        .then(({ message }) => res.json({ message }))
        .catch(err => next(err));
    });
  
  router
    .get('/logout', (req, res, next) => {
      const { username } = Session.parse(req.cookies.sessionString);

      AccountTable.updateSessionId({
        sessionId: null,
        usernameHash: hash(username)
      })
      .then(() => {
        res.clearCookie('sessionString');
        res.json({ message: 'Successful logout' });
      })
      .catch(err => next(err));
    });

module.exports = router