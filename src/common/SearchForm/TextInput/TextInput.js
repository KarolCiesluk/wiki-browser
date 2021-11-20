import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <input {...field} {...props} />
  );
};

export default TextInput;