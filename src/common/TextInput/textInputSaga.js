import { listSaga } from "common/listSaga";
import { getSuggestions } from "./suggestionsAPI";
import { actions } from "./textInputSlice";

const SEARCH_DELAY = 500;

export function* watchFetchSuggestions() {
  yield listSaga({
    actions,
    getListData: getSuggestions,
    searchDelay: SEARCH_DELAY,
  });
}