import { ErrorMessage } from "formik";

import { inputValueName, SearchForm, TextInput } from "common";

const Home = () => {
  return (
    <SearchForm>
      <TextInput
        aria-label="Search Wikipedia"
        name={inputValueName}
        type="text"
        placeholder="Search Wikipedia"
      />
      <ErrorMessage name={inputValueName} />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

// import styled, { css } from "styled-components";

// const Input = styled.input`
//   opacity: 0;
//   transition: opacity 1s;

//   ${({ show }) => show && css`
//     opacity: 1;
//   `}
// `;

export default Home;