import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import suggestionsReducer from "common/textInput/textInputSlice";
import articlesReducer from "features/articleList/articleListSlice";
import articleReducer from "features/article/articleSlice";
import { rootSaga } from "core/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
    articles: articlesReducer,
    article: articleReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;