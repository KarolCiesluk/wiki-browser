import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addHistoryItem } from "pages/searchHistory/searchHistorySlice";

export const useAddHistoryItemOnPageLoad = ({ query }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const historyItem = {
      id: nanoid(),
      query,
      date: new Date().toJSON(),
    };

    dispatch(addHistoryItem(historyItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
};