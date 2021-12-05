import { useQueryParameter } from "common";

export const useCurrentPage = () => {
  const pageQuery = useQueryParameter("page");

  return pageQuery ? parseInt(pageQuery) : 1;
};