import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import { Provider } from 'react-redux';

// Redux
import { generationReducer } from './reducers';
import { generationActionCreator } from './actions/generation';


import './index.css';

const store = createStore( 
  generationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

fetch('http://localhost:3000/generation')
  .then(res => res.json())
  .then(res => {store.dispatch(generationActionCreator(res.generation))});


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