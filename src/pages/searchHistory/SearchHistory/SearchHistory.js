import { useSelector } from "react-redux";

import {
  selectIsHistoryEmpty,
} from "../searchHistorySlice";
import { PageTitle, Wrapper } from "common";
import { Buttons } from "./Buttons";
import { HistoryList } from "./HistoryList";

const SearchHistory = () => {
  const isHistoryEmpty = useSelector(selectIsHistoryEmpty);

  return (
    <>
      {isHistoryEmpty ?
        <PageTitle>History is empty</PageTitle> :
        <>
          <PageTitle>Search history</PageTitle>

          <Wrapper>
            <Buttons />
            <HistoryList />
          </Wrapper>
        </>
      }
    </>
  );
};

export default SearchHistory;