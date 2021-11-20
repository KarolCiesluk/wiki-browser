import { useNavigate } from "react-router";

import { buildQueryString } from "./buildQueryString";

export const useHandleSubmit = () => {
  const navigate = useNavigate();

  return (
    { inputValue }
  ) => {
    if (inputValue.trim()) {
      const queryString = buildQueryString({
        key: "search",
        value: inputValue.trim(),
      });

      navigate(`articles?${queryString}`);
    }
  };
};