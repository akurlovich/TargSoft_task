import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import './index.html'

import App from './ts/App';
import { Provider } from 'react-redux';
import { store } from './ts/store';


ReactDOM.render(
  <Provider store={store}>
    <App/>,
  </Provider>,
  document.getElementById('root')
);