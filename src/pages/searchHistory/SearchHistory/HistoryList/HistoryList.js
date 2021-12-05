import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { List } from "common";
import { SearchListOfGivenDay } from "./SearchListOfGivenDay";
import { selectFormattedDates } from "../../searchHistorySlice";

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