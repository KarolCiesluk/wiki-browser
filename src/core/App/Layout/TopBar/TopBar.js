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
              name={inputValueName}
              type="text"
              label="Search Wikipedia"
              variant="standard"
            />
          </SearchForm>
        }
      </Container>
    </header>
  );
};

export default TopBar;