import { createListSlice } from "common";

const {
  actions,
  selectors,
  reducer
} = createListSlice({ name: "articles" });

export { actions, selectors };
export default reducer;