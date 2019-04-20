import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Componets
import Root from './components/Root';

// Redux
import rootReducer from './reducers';

import './index.css';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( 
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
  );

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);