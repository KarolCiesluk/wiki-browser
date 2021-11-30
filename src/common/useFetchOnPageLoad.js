import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useFetchOnPageLoad = ({ fetchAction, payload }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAction(payload));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload]);
};