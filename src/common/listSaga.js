import { call, put, takeLatest } from "redux-saga/effects";

export function* listSaga({
  actions,
  getListData,
}) {
  function* fetchListHandler({ payload: value }) {
    try {
      const list = yield call(getListData, value);
      yield put(actions.fetchSuccess(list));
    } catch (error) {
      yield put(actions.fetchError());
      console.error(error);
    }
  };

  yield takeLatest(actions.fetch.type, fetchListHandler);
}