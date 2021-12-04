import { useCurrentPage } from "./useCurrentPage";

export const useList = ({ list, numberOfItems }) => {
  const currentPage = useCurrentPage();

  return list?.slice(
    currentPage * numberOfItems - numberOfItems, currentPage * numberOfItems
  );
};