import { useRef } from "react";
import { useDispatch } from "react-redux";

import { actions } from "./inputSlice";

const SEARCH_DELAY = 500;

export const useHandleInputChange = onChange => {
  const timeoutRef = useRef();
  const dispatch = useDispatch();

  return (event) => {
    clearTimeout(timeoutRef.current);
    onChange(event);

    const value = event.target.value;

    timeoutRef.current = setTimeout(() => {
      if (value && value.trim()) {
        dispatch(actions.fetch(value))
      } else {
        dispatch(actions.clear());
      }
    }, SEARCH_DELAY);
  };
};