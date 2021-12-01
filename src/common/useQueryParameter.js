import { useLocation } from "react-router";

export const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();

  return (new URLSearchParams(location.search)).get(searchQueryParamName);
};