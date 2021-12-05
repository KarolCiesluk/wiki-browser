import { all } from "redux-saga/effects";

import { watchFetchSuggestions } from "common";
import {
  watchFetchArticle,
  watchFetchArticles,
  watchSearchHistoryChange
} from "pages";

function* rootSaga() {
  yield all([
    watchFetchSuggestions(),
    watchFetchArticles(),
    watchFetchArticle(),
    watchSearchHistoryChange(),
  ]);
};

export default rootSaga;