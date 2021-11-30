import { useDispatch } from "react-redux";

import { actions } from "../textInputSlice";

export const useHandleInputChange = onChange => {
  const dispatch = useDispatch();

  return (event) => {
    onChange(event);

    const query = event.target.value;

    if (query && query.trim()) {
      dispatch(actions.fetch(query));
    } else {
      dispatch(actions.clear());
    }
  };
};