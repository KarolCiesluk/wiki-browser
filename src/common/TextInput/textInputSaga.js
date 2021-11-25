import { listSaga } from "common/listSaga";
import { getSuggestions } from "./getSuggestions";
import { actions } from "./textInputSlice";

export function* watchFetchSuggestions() {
  yield listSaga({
    actions,
    getListData: getSuggestions,
  });
}