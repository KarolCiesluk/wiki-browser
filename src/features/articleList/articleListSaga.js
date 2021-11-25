import { actions } from "./articleListSlice";
import { listSaga } from "common/listSaga";
import { getArticles } from "./getArticles";

const DEMO_DELAY = 200;

export function* watchFetchArticles() {
  yield listSaga({
    actions,
    getListData: getArticles,
    searchDelay: DEMO_DELAY,
  });
}