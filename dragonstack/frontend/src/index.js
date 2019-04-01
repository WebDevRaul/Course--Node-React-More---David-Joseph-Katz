import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

import './index.css';

const DEFAULT_GENERATION = {getElementById: '', expiration: ''}

const generationReducer = () => {
  return { generation: DEFAULT_GENERATION }
}

const store = createStore( generationReducer );

render(
  <div>
    <h2>Dragon Stack test</h2>
    <Generation />
    <Dragon />
  </div>,
  document.getElementById('root')
);