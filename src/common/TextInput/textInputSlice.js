import createListSlice from "common/createListSlice";

const {
  actions,
  selectors,
  reducer
} = createListSlice({ name: "suggestions" });

export { actions, selectors };
export default reducer;