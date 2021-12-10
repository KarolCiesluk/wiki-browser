import { all } from "redux-saga/effects";

import { watchFetchSuggestions } from "common";
import {
  watchFetchArticles,
  watchSearchHistoryChange
} from "pages";

function* rootSaga() {
  yield all([
    watchFetchSuggestions(),
    watchFetchArticles(),
    watchSearchHistoryChange(),
  ]);
};

export default rootSaga;