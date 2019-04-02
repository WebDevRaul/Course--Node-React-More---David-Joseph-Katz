import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Redux
import { generationReducer } from './reducers';

import './index.css';

const store = createStore( 
  generationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );

render(
  <Provider store={store}>
    <div>
      <h2>Dragon Stack test</h2>
      <Generation />
      <Dragon />
    </div>
  </Provider>,
  document.getElementById('root')
);