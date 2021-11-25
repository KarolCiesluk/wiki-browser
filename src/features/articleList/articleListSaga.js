import { actions } from "./articleListSlice";
import { listSaga } from "common/listSaga";
import { getArticles } from "./getArticles";

export function* watchFetchArticles() {
  yield listSaga({
    actions,
    getListData: getArticles,
  });
}