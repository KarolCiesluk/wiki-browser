import { createSlice } from "@reduxjs/toolkit";

export const createListSlice = ({ name }) => {
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

  const selectData = state => state[name][name];
  const selectStatus = state => state[name].status;

  return {
    actions: listSlice.actions,
    selectors: {
      selectData,
      selectStatus
    },
    reducer: listSlice.reducer,
  };
};