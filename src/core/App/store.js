import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import suggestionsReducer from "common/TextInput/inputSlice";
import { rootSaga } from "core/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    suggestions: suggestionsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;