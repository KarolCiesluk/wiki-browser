import { useField } from "formik";
import { useEffect, useRef } from "react";

const TextInput = ({ label, ...props }) => {
  const [field] = useField(props);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <input ref={inputRef} {...field} {...props} />
  );
};

export default TextInput;