import { useDispatch } from "react-redux";
import { toggleShowLanguages } from "../articleSlice";

export const useToggleShowLanguages = () => {
  const dispatch = useDispatch();

  return () => dispatch(toggleShowLanguages());
};