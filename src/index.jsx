import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './store';

import Board from './components/Board';

import './index.css';

const App = () => (
  <Provider store={store}>
    <Board />
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
