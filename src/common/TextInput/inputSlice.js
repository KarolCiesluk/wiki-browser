import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  suggestions: null,
  status: "initial",
};

const inputSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    fetchSuggestions: state => {
      state.status = "loading";
    },
    fetchSuggestionsSuccess: (state, { payload: suggestions }) => {
      state.suggestions = suggestions.pages;
      state.status = "success";
    },
    fetchSuggestionsError: state => {
      state.status = "error";
    },
    clearData: () => initialState,
  },
});

export const {
  fetchSuggestions,
  fetchSuggestionsSuccess,
  fetchSuggestionsError,
  clearData
} = inputSlice.actions;

export const selectSuggestionsState = state => state.suggestions.suggestions;

export default inputSlice.reducer;