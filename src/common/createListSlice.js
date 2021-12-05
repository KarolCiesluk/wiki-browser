import { createSlice } from "@reduxjs/toolkit";

const createListSlice = ({ name }) => {
  const initialState = {
    [name]: null,
    status: "initial",
  };

  const listSlice = createSlice({
    name,
    initialState,
    reducers: {
      fetch: state => {
        state.status = "loading";
      },
      fetchSuccess: (state, { payload: data }) => {
        state[name] = data.pages;
        state.status = "success";
      },
      fetchError: state => {
        state.status = "error";
      },
      clear: () => initialState,
    }
  });

  const selectState = state => state[name];

  const selectData = state => selectState(state)[name];
  const selectStatus = state => selectState(state).status;

  return {
    actions: listSlice.actions,
    selectors: {
      selectData,
      selectStatus
    },
    reducer: listSlice.reducer,
  };
};

export default createListSlice;