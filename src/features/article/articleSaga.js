import { all, call, put, takeLatest } from "@redux-saga/core/effects";

import {
  fetchArticle,
  fetchArticleError,
  fetchArticleSuccess
} from "./articleSlice";
import { getArticle, getArticleLanguages } from "./articleAPI";

function* handleFetchArticle({ payload }) {
  try {
    const [article, languages] = yield all([
      call(getArticle, payload),
      call(getArticleLanguages, payload),
    ]);
    yield put(fetchArticleSuccess({ article, languages }));
  } catch (error) {
    yield put(fetchArticleError());
  }
};

export function* watchFetchArticle() {
  yield takeLatest(fetchArticle.type, handleFetchArticle);
}