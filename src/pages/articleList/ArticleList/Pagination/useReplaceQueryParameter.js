import { useSearchParams } from "react-router-dom";

export const useReplaceQueryParameter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return ({ key, value }) => {
    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    setSearchParams(searchParams);
  };
};