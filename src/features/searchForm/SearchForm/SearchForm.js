import { ErrorMessage, Form, Formik } from "formik";

import { TextInput } from "./TextInput";
import { validationSchema } from "./validationSchema";
import { inputValueName } from "./inputValueName";
import { useHandleSubmit } from "./useHandleSubmit";

const SearchForm = () => {
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
          <ErrorMessage name={inputValueName} />

          <button type="submit">Search</button>

        </Form>
      </>
    </Formik >
  );
};

export default SearchForm;