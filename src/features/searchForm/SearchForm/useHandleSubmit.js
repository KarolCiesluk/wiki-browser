import { useNavigate } from "react-router";

import { buildQueryString } from "./buildQueryString";

const searchQueryName = "search";

export const useHandleSubmit = (inputValueName) => {
  const navigate = useNavigate();

  return (values) => {
    const value = values[inputValueName].trim();

    if (value) {
      const queryString = buildQueryString({
        key: searchQueryName,
        value,
      });

      navigate(`articles?${queryString}`);
    }
  };
};