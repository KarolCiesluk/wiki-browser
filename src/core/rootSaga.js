import { all } from "redux-saga/effects";

import { watchFetchSuggestions } from "common/TextInput/suggestionsSaga";

export function* rootSaga() {
  yield all([
    watchFetchSuggestions(),
  ]);
};