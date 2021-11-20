import React from 'react';
import ReactDOM from 'react-dom';

import { App, GlobalStyle } from 'core';
import { Normalize } from 'styled-normalize';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);