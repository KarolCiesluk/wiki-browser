import { useSelector } from "react-redux";
import { FaHistory } from "react-icons/fa";

import { PageTitle, Wrapper } from "common";
import { Buttons } from "./Buttons";
import { HistoryList } from "./HistoryList";
import { selectIsHistoryEmpty } from "../searchHistorySlice";

const SearchHistory = () => {
  const isHistoryEmpty = useSelector(selectIsHistoryEmpty);

  return (
    <>
      {isHistoryEmpty ?
        <PageTitle historyIsEmpty>
          <FaHistory /><br />Search history is empty
        </PageTitle> :
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