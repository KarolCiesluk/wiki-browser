import { all } from "redux-saga/effects";

import { watchFetchSuggestions } from "common/textInput/textInputSaga";
import { watchFetchArticles } from "pages/articles/articlesSaga";
import { watchFetchArticle } from "pages/article/articleSaga";
import { watchSearchHistoryChange } from "pages/searchHistory/searchHistorySaga";

export function* rootSaga() {
  yield all([
    watchFetchSuggestions(),
    watchFetchArticles(),
    watchFetchArticle(),
    watchSearchHistoryChange(),
  ]);
};