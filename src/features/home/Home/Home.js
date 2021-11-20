import { ErrorMessage } from "formik";

import { SearchForm } from "features";
import { inputValueName } from "common";

const Home = () => {
  return (
    <SearchForm>
      <ErrorMessage name={inputValueName} />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

export default Home;