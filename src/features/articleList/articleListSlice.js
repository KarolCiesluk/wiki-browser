import { createListSlice } from "common/createListSlice";

const {
  actions,
  selectors,
  reducer
} = createListSlice({ name: "articles" });

export { actions, selectors };
export default reducer;