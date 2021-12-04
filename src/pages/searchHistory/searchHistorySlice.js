import { createSlice } from "@reduxjs/toolkit";

import { formatJsonDate } from "./formatJsonDate";
import { getHistoryFromLocalStorage } from "./searchHistoryLocalStorage";

const initialState = {
  history: getHistoryFromLocalStorage(),
};

const searchHistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistoryItem: ({ history }, { payload: historyItem }) => {
      history.unshift(historyItem);
    },
    removeHistoryItem: ({ history }, { payload }) => {
      const index = history.findIndex(({ id }) => id === payload);

      history.splice(index, 1);
    },
    clearHistory: ({ history }) => {
      history.splice(0, history.length);
    },
    toggleHistoryItemSelected: ({ history }, { payload: historyItemId }) => {
      const index = history.findIndex(({ id }) => id === historyItemId);

      history[index].selected = !history[index].selected;
    },
    removeSelectedHistoryItems: (state) => {
      state.history = state.history.filter(historyItem => !historyItem.selected);;
    },
    unselectAllHistoryItems: ({ history }) => {
      for (const historyItem of history) {
        historyItem.selected = false;
      }
    },
  },
});

export const {
  addHistoryItem,
  removeHistoryItem,
  clearHistory,
  toggleHistoryItemSelected,
  removeSelectedHistoryItems,
  unselectAllHistoryItems,
} = searchHistorySlice.actions;

const selectHistoryState = state => state.history;

export const selectHistory = state => selectHistoryState(state).history;
export const selectIsHistoryEmpty = state => !selectHistory(state).length;
export const selectFormattedDates = state => {
  const dates = selectHistory(state).map(({ date }) => formatJsonDate(date));
  const formattedDates = dates.filter((date, index, dates) => (
    dates.indexOf(date) === index
  ));

  return formattedDates;
};
export const selectSelectedItemsCount = state =>
  selectHistory(state).filter(({ selected }) => selected).length;

export default searchHistorySlice.reducer;