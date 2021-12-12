import { useLocation } from "react-router";

const useQueryParameter = (searchQueryParamName) => {
  const { search } = useLocation();

  return (new URLSearchParams(search)).get(searchQueryParamName);
};

export default useQueryParameter;