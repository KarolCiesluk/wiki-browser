import { ErrorMessage } from "formik";

import { inputValueName, SearchForm } from "common";

const Home = () => {
  return (
    <SearchForm>
      <ErrorMessage name={inputValueName} />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

export default Home;