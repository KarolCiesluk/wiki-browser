import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { actions } from "../textInputSlice";

export const useHandleInputChange = value => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (value && value.trim()) {
      dispatch(actions.fetch({ value }));
    } else {
      dispatch(actions.clear());
    }
  }, [value, dispatch]);
};