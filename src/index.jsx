import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './store';

import Board from './components/Board';
import Header from './components/Header';
import Buttons from './components/Buttons';

import './index.css';

const App = () => (
  <Provider store={store}>
    <div id="app">
      <Header title="Sudoku App" />
      <Board />
      <Buttons />
    </div>
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
