import React from 'react';
import ReactDOM from 'react-dom';

import { App, GlobalStyle } from 'core';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);