import { Form, Formik } from "formik";

import { inputValueName } from "common";
import { validationSchema } from "./validationSchema";
import { useHandleSubmit } from "./useHandleSubmit";

const SearchForm = ({ children }) => {
  const handleSubmit = useHandleSubmit(inputValueName);

  return (
    <Formik
      initialValues={{
        [inputValueName]: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {children}
      </Form>
    </Formik>
  );
};

export default SearchForm;