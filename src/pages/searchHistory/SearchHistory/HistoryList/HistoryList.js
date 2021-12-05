import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { selectFormattedDates } from "pages/searchHistory/searchHistorySlice";
import { SearchListOfGivenDay } from "./SearchListOfGivenDay";
import { List } from "common";

const HistoryList = () => {
  const formattedDates = useSelector(selectFormattedDates);

  return (
    <List>
      {formattedDates.map(day => (
        <li key={nanoid()}>
          <SearchListOfGivenDay day={day} />
        </li>
      ))}
    </List>
  );
};

export default HistoryList;