import { ErrorMessage } from "formik";
import { useEffect, useRef } from "react";

import { inputValueName, SearchForm, TextInput } from "common";

const Home = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <SearchForm>
      <TextInput
        aria-label="Search Wikipedia"
        name={inputValueName}
        type="text"
        placeholder="Search Wikipedia"
        ref={inputRef}
      />
      <ErrorMessage name={inputValueName} />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

export default Home;