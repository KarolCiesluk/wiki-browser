import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import {
  selectIsHistoryEmpty,
  selectFormattedDates,
  clearHistory,
  removeSelectedHistoryItems,
  selectSelectedItemsCount,
  unselectAllHistoryItems,
} from "../searchHistorySlice";
import { SearchListOfGivenDay } from "./SearchListOfGivenDay";

const SearchHistory = () => {
  const isHistoryEmpty = useSelector(selectIsHistoryEmpty);
  const formattedDates = useSelector(selectFormattedDates);
  const selectedItemsCount = useSelector(selectSelectedItemsCount);

  const dispatch = useDispatch();

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const handleRemoveSelected = () => {
    dispatch(removeSelectedHistoryItems());
  };

  const handleUnselectAll = () => {
    dispatch(unselectAllHistoryItems());
  }

  return (
    <section>
      {isHistoryEmpty ?
        <h1>History is empty</h1> :
        <>
          <header>
            <h1>Search history</h1>

            <button onClick={handleClearHistory}>
              Clear History
            </button>

            {!!selectedItemsCount &&
              <>
                <button onClick={handleUnselectAll}>
                  X
                </button>

                <span>Selected items: {selectedItemsCount}</span>

                <button onClick={handleRemoveSelected}>
                  Remove Selected
                </button>
              </>
            }
          </header>

          <ul>
            {formattedDates.map(day => (
              <li key={nanoid()}>
                <SearchListOfGivenDay day={day} />
              </li>
            ))}
          </ul>
        </>
      }
    </section>
  );
};

export default SearchHistory;