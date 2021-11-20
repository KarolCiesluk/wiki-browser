import { Form, Formik } from "formik";

import { TextInput } from "./TextInput";
import { validationSchema } from "./validationSchema";
import { inputValueName } from "common";
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
      <>
        <Form>
          <TextInput
            aria-label="Search Wikipedia"
            name={inputValueName}
            type="text"
            placeholder="Search Wikipedia"
          />
          {children}
        </Form>
      </>
    </Formik>
  );
};

export default SearchForm;