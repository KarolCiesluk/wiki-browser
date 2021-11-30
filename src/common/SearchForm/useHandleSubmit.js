import { useNavigate } from "react-router";

export const useHandleSubmit = (inputValueName) => {
  const navigate = useNavigate();

  return (values) => {
    const query = values[inputValueName].trim();

    if (query) {
      navigate(`articles/${query}`);
    }
  };
};