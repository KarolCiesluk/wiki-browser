import { useMemo } from "react";

import { useMediaWatcher } from "common/useMediaWatcher";
import { getRangeNumbers } from "./getRangeNumbers";

export const DOTS = "…";

export const usePagination = ({
  totalPageCount,
  currentPage,
  initialSiblingCount = 1,
}) => {
  const isSmallScreen = useMediaWatcher({ maxWidth: 500 });
  const siblingCount = isSmallScreen ? initialSiblingCount - 1 : initialSiblingCount;

  const paginationRange = useMemo(() => {
    const firstPageIndex = 1;
    const allSiblingsCount = siblingCount * 2;
    const sideItemsCount = allSiblingsCount + 3;

    const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPageIndex);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    if (allSiblingsCount + 5 > totalPageCount) {
      return getRangeNumbers(firstPageIndex, totalPageCount);
    }

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = getRangeNumbers(firstPageIndex, sideItemsCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = getRangeNumbers(
        totalPageCount - sideItemsCount + firstPageIndex,
        totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = getRangeNumbers(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, totalPageCount];
    }
  }, [siblingCount, currentPage, totalPageCount]);

  return paginationRange;
};