import { useQueryParameter } from "common/useQueryParameter";

export const useCurrentPage = () => {
  const pageQuery = useQueryParameter("page");

  return pageQuery ? parseInt(pageQuery) : 1;
};