import { useEffect } from "react";

import { useGoToPage } from "./Pagination/useGoToPage";
import { useCurrentPage } from "./useCurrentPage";

export const useGoToFirstPageWhenListEmpty = (list) => {
  const goToPage = useGoToPage();
  const currentPage = useCurrentPage();
  const isEmpty = !list?.length;

  useEffect(() => {
    if (isEmpty && currentPage !== 1) {
      goToPage(1);
    }
  }, [goToPage, isEmpty, currentPage]);
};