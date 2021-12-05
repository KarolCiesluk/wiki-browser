import { listSaga } from "common";
import { actions } from "./articlesSlice";
import { getArticles } from "./articlesAPI";

function* watchFetchArticles() {
  yield listSaga({
    actions,
    getListData: getArticles,
  });
}

export default watchFetchArticles;