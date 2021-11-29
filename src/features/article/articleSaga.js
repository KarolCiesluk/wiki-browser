import { takeLatest } from "@redux-saga/core/effects";

import { fetchArticle } from "./articleSlice";

function* handleFetchArticle() {

};

export function* watchFetchArticle() {
  yield takeLatest(fetchArticle.type, handleFetchArticle);
}