import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Board from './components/Board';


export default () => (
  <Provider store={store}>
    <Board />
  </Provider>
);
