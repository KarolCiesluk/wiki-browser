import { useLocation } from "react-router";

import Container from "../Container";
import { inputValueName, SearchForm, TextInput } from "common";
import { Header } from "./styled";

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <Header>
      <Container as="div">
        <div>
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
        </div>
      </Container>
    </Header>
  );
};

export default TopBar;