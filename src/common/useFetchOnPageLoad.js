import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useFetchOnPageLoad = ({ fetchAction, value, language }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAction({ value, language }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, language]);
};

export default useFetchOnPageLoad;