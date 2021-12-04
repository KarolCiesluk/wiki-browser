import { actions } from "./articlesSlice";
import { listSaga } from "common/listSaga";
import { getArticles } from "./articlesAPI";

export function* watchFetchArticles() {
  yield listSaga({
    actions,
    getListData: getArticles,
  });
}