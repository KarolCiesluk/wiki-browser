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
import { PageTitle } from "common";

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
    <>
      {isHistoryEmpty ?
        <PageTitle>History is empty</PageTitle> :
        <>
          <header>
            <PageTitle>Search history</PageTitle>

            <button onClick={handleClearHistory}>
              Clear History
            </button>

            {!!selectedItemsCount &&
              <>
                <button onClick={handleUnselectAll}>
                  X
                </button>

                <span>Selected: {selectedItemsCount}</span>

                <button onClick={handleRemoveSelected}>
                  Delete Selected
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
    </>
  );
};

export default SearchHistory;