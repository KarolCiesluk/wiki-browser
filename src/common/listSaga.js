import { call, put, takeLatest, delay } from "redux-saga/effects";

export function* listSaga({
  actions,
  getListData,
  searchDelay,
}) {
  function* fetchListHandler({ payload }) {
    yield !!searchDelay && delay(searchDelay);

    try {
      const list = yield call(getListData, payload);
      yield put(actions.fetchSuccess(list));
    } catch (error) {
      yield put(actions.fetchError());
      console.error(error);
    }
  };

  yield takeLatest(actions.fetch.type, fetchListHandler);
}