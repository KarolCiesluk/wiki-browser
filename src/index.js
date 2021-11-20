import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';

import { App, GlobalStyle } from 'core';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);