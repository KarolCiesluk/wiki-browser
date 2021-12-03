import { all } from "redux-saga/effects";

import { watchFetchSuggestions } from "common/textInput/textInputSaga";
import { watchFetchArticles } from "features/articleList/articleListSaga";
import { watchFetchArticle } from "features/article/articleSaga";
import { watchSearchHistoryChange } from "features/searchHistory/searchHistorySaga";

export function* rootSaga() {
  yield all([
    watchFetchSuggestions(),
    watchFetchArticles(),
    watchFetchArticle(),
    watchSearchHistoryChange(),
  ]);
};