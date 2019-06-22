import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import history from './history';

// Componets
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import PublicDragons from './components/PublicDragons';

// Redux
import rootReducer from './reducers';
import { fetchAuthenticated } from './actions/account';

import './index.css';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( 
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
  );

const AuthRoute = props => {
  if (!store.getState().account.loggedIn) {
    return <Redirect to={{ pathname: '/' }} />
  }

  const { component, path } = props;

  return <Route path={path} component={component} />
}

store.dispatch(fetchAuthenticated())
  .then(() => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Root} />
            <AuthRoute path='/account-dragons' component={AccountDragons} />
            <AuthRoute path='/public-dragons' component={PublicDragons} />
          </Switch>
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  });