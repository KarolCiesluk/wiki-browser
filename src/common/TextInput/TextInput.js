import { forwardRef } from "react";
import { useField } from "formik";

const TextInput = forwardRef(({ label, ...props }, ref) => {
  const [field] = useField(props);

  return (
    <input ref={ref} {...field} {...props} />
  );
});

export default TextInput;