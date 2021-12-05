import { useEffect } from "react";
import { useDispatch } from "react-redux"

const useClearDataOnLeave = ({ clearAction }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useClearDataOnLeave;