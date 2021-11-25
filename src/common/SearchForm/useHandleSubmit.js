import { useNavigate } from "react-router";

import { searchQueryName } from "common/searchQueryName";
import { buildQueryString } from "./buildQueryString";

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