import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFetchOnPageLoad = ({ fetchAction, value }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAction(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
};