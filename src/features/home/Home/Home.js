import { ErrorMessage } from "formik";

import { inputValueName, SearchForm, TextInput } from "common";

const Home = () => {
  return (
    <SearchForm>
      <TextInput
        autoFocus
        name={inputValueName}
        type="text"
        label="Search Wikipedia"
      />
      <ErrorMessage name={inputValueName} />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

export default Home;