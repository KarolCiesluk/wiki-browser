import { useLocation } from "react-router";

const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();

  return (new URLSearchParams(location.search)).get(searchQueryParamName);
};

export default useQueryParameter;