import { all } from "redux-saga/effects";

import { watchFetchSuggestions } from "common/TextInput/inputSaga";

export function* rootSaga() {
  yield all([
    watchFetchSuggestions(),
  ]);
};