import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

import {
  removeHistoryItem,
  selectHistory, toggleHistoryItemSelected
} from "features/searchHistory/searchHistorySlice";
import { formatJsonDate } from "features/searchHistory/formatJsonDate";

const SearchListOfGivenDay = ({ day }) => {
  const searchHistory = useSelector(selectHistory);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{day}</h2>

      <ul>
        {searchHistory.filter(item =>
          formatJsonDate(item.date) === day).map(item => (
            <li key={nanoid()}>

              <button
                onClick={() => dispatch(toggleHistoryItemSelected(item.id))}
              >
                {item.selected ? "selected" : "select"}
              </button>

              <time dateTime={item.date}>
                {new Date(item.date).toLocaleTimeString(
                  undefined,
                  { hour: '2-digit', minute: '2-digit' }
                )}
              </time>

              <Link to={`../articles/${item.query}`}>
                {item.query}
              </Link>

              <button onClick={() => dispatch(removeHistoryItem(item.id))} >
                Remove
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SearchListOfGivenDay;