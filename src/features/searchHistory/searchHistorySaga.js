import { call, select, takeEvery } from "@redux-saga/core/effects";

import {
  addHistoryItem,
  clearHistory,
  removeHistoryItem,
  removeSelectedHistoryItems,
  selectHistory
} from "./searchHistorySlice";
import { saveHistoryInLocalStorage } from "./searchHistoryLocalStorage";

function* searchHistoryChangeHandler() {
  const history = yield select(selectHistory);

  yield call(saveHistoryInLocalStorage, history);
}

export function* watchSearchHistoryChange() {
  yield takeEvery(
    [
      addHistoryItem.type,
      removeHistoryItem.type,
      clearHistory.type,
      removeSelectedHistoryItems.type,
    ],
    searchHistoryChangeHandler
  );
}