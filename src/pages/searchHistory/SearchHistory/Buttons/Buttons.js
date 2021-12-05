import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

import {
  clearHistory,
  removeSelectedHistoryItems,
  selectSelectedItemsCount,
  unselectAllHistoryItems
} from "pages/searchHistory/searchHistorySlice";
import { CancelButton } from "common";
import { DeleteButton, StyledButtons, Wrapper } from "./styled";

const Buttons = () => {
  const selectedItemsCount = useSelector(selectSelectedItemsCount);
  const dispatch = useDispatch();

  const isAnyItemSelected = !!selectedItemsCount;

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
    <StyledButtons>
      {isAnyItemSelected ?
        <>
          <Wrapper>
            <CancelButton
              cancelSelected
              title="cancel"
              onClick={handleUnselectAll}
            >
              <IoClose />
            </CancelButton>

            <span>Selected: {selectedItemsCount}</span>
          </Wrapper>

          <DeleteButton onClick={handleRemoveSelected}>
            Delete Selected
          </DeleteButton>
        </>
        :
        <DeleteButton clear onClick={handleClearHistory}>
          Clear History
        </DeleteButton>
      }
    </StyledButtons>
  );
};

export default Buttons;