import { call, put, takeLatest } from "redux-saga/effects";

import { getSuggestions } from "./getSuggestions";
import { fetchSuggestionsError, fetchSuggestionsSuccess } from "./inputSlice";
import { fetchSuggestions } from "./inputSlice";

function* fetchSuggestionsHandler({ payload: value }) {
  try {
    const suggestions = yield call(getSuggestions, value);
    yield put(fetchSuggestionsSuccess(suggestions));
  } catch (error) {
    yield put(fetchSuggestionsError());
    console.error(error);
  }
};

export function* watchFetchSuggestions() {
  yield takeLatest(fetchSuggestions.type, fetchSuggestionsHandler);
};