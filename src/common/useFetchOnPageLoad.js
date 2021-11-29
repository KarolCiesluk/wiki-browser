import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const useFetchOnPageLoad = ({ fetchAction, value }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    value ?
      dispatch(fetchAction(value)) :
      navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
};