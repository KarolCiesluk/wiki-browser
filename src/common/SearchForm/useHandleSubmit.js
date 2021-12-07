import { useNavigate } from "react-router";

import { toArticles } from "core";

export const useHandleSubmit = (inputValueName) => {
  const navigate = useNavigate();

  return (values) => {
    const query = values[inputValueName].trim();

    if (query) {
      navigate(toArticles(query));
    }
  };
};