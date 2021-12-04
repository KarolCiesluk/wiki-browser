import { DOTS, usePagination } from "./usePagination";
import { useGoToPage } from "./useGoToPage";
import { useCurrentPage } from "../useCurrentPage";
import {
  Button,
  Dots,
  LinkText,
  Strong,
  StyledArrow,
  Wrapper
} from "./styled";

const Pagination = ({ pageSize, totalCount }) => {
  const currentPage = useCurrentPage();

  const totalPageCount = Math.ceil(totalCount / pageSize);
  const paginationRange = usePagination({ totalPageCount, currentPage });

  const goToPage = useGoToPage();

  return (
    <Wrapper>

      <Button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Strong>
          <StyledArrow left />
          <LinkText>Previous</LinkText>
        </Strong>
      </Button>

      {paginationRange?.map((pageNumber, index) => (
        pageNumber === DOTS
          ? <Dots key={index}>{pageNumber}</Dots>
          : <Button
            key={index}
            selected={pageNumber === currentPage}
            onClick={() => goToPage(pageNumber)}
          >
            {pageNumber}
          </Button>
      ))}

      <Button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPageCount}
      >
        <Strong>
          <LinkText>Next</LinkText>
          <StyledArrow />
        </Strong>
      </Button>

    </Wrapper>
  );
};

export default Pagination;