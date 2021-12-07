import { useQueryParameter } from "common";
import { pageQueryName } from "./pageQueryName";

export const useCurrentPage = () => {
  const pageQuery = useQueryParameter(pageQueryName);

  return pageQuery ? parseInt(pageQuery) : 1;
};