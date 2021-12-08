import { listSaga } from "common";
import { getSuggestions } from "./suggestionsAPI";
import { actions } from "./textInputSlice";

const SEARCH_DELAY = 500;

function* watchFetchSuggestions() {
  yield listSaga({
    actions,
    getListData: getSuggestions,
    searchDelay: SEARCH_DELAY,
  });
}

export default watchFetchSuggestions;