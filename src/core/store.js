import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { suggestionsReducer } from "common";
import rootSaga from "./rootSaga";
import { articleReducer, articlesReducer, historyReducer } from "pages";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
    articles: articlesReducer,
    article: articleReducer,
    history: historyReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;