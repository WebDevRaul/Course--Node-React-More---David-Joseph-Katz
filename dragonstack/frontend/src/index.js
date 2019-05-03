import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// Componets
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';

// Redux
import rootReducer from './reducers';
import { fetchAuthenticated } from './actions/account';

import './index.css';

const history = createBrowserHistory();


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( 
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
  );

store.dispatch(fetchAuthenticated())
  .then(() => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Root} />
            <Route exact path='/account/dragons' component={AccountDragons} />
          </Switch>
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  });