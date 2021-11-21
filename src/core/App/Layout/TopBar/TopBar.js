import { useLocation } from "react-router";

import Container from "../Container";
import { inputValueName, SearchForm, TextInput } from "common";

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <Container as="div">
        Header
        {
          pathname !== "/" &&
          <SearchForm>
            <TextInput
              aria-label="Search Wikipedia"
              name={inputValueName}
              type="text"
              placeholder="Search Wikipedia"
            />
          </SearchForm>
        }
      </Container>
    </header>
  );
};

export default TopBar;