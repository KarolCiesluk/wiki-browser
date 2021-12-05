import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";

import App, { GlobalStyle, store } from "core";

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