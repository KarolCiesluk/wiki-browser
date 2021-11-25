import { all } from "redux-saga/effects";

import { watchFetchSuggestions } from "common/textInput/textInputSaga";
import { watchFetchArticles } from "features/articleList/articleListSaga";

export function* rootSaga() {
  yield all([
    watchFetchSuggestions(),
    watchFetchArticles(),
  ]);
};