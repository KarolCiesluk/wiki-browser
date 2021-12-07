import { pageQueryName } from "./pageQueryName";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";

export const useGoToPage = () => {
  const replaceQueryParameter = useReplaceQueryParameter();

  return (pageNumber) => replaceQueryParameter({
    key: pageQueryName,
    value: pageNumber === 1 ? undefined : pageNumber,
  });
};