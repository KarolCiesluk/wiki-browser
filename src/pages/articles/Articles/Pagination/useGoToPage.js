import { useReplaceQueryParameter } from "./useReplaceQueryParameter";

export const useGoToPage = () => {
  const replaceQueryParameter = useReplaceQueryParameter();

  return (pageNumber) => replaceQueryParameter({
    key: "page",
    value: pageNumber === 1 ? undefined : pageNumber,
  });
};