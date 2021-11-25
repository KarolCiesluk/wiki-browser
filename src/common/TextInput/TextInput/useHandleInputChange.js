import { useDispatch } from "react-redux";

import { actions } from "../textInputSlice";

export const useHandleInputChange = onChange => {
  const dispatch = useDispatch();

  return (event) => {
    onChange(event);

    const value = event.target.value;

    if (value && value.trim()) {
      dispatch(actions.fetch(value));
    } else {
      dispatch(actions.clear());
    }
  };
};