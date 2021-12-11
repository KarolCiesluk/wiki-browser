import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";

import { List, Title } from "common";
import {
  removeHistoryItem,
  selectHistory,
  toggleHistoryItemSelected,
} from "pages/searchHistory/searchHistorySlice";
import { formatDate } from "pages/searchHistory/formatDate";
import { formatTime } from "./formatTime";
import { Button, ListItem, StyledLink } from "./styled";
import { toArticles } from "core";

const SearchListOfGivenDay = ({ day }) => {
  const searchHistory = useSelector(selectHistory);
  const dispatch = useDispatch();

  return (
    <>
      <Title>{day}</Title>

      <List>
        {searchHistory.filter(item =>
          formatDate(item.date) === day).map(item => (
            <ListItem key={nanoid()}>

              <Button
                toggleSelected
                onClick={() => dispatch(toggleHistoryItemSelected(item.id))}
              >
                {item.selected && <GoPrimitiveDot />}
              </Button>

              <time dateTime={item.date}>
                {formatTime(item.date)}
              </time>

              <StyledLink to={toArticles(item.query)}>
                {item.query}
              </StyledLink>

              <Button
                remove
                onClick={() => dispatch(removeHistoryItem(item.id))}
              >
                <RiDeleteBin6Line />
              </Button>

            </ListItem>
          ))}
      </List>
    </>
  );
};

export default SearchListOfGivenDay;