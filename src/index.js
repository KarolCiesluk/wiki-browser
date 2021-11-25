import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { Provider } from "react-redux";

import { App, GlobalStyle } from 'core';
import store from 'core/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);