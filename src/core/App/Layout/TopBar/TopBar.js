import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import Container from "../Container";
import { inputValueName, SearchForm, TextInput } from "common";
import { FormWrapper, Header, StyledWikiIcon, TopBarGrid } from "./styled";
import { Navigation } from "./Navigation";

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <Header>
      <Container as="div">
        <TopBarGrid>

          <Link to="/" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <StyledWikiIcon />
            Wiki browser
          </Link>

          {
            pathname !== "/" &&
            <FormWrapper>
              <SearchForm>
                <TextInput
                  name={inputValueName}
                  type="text"
                  label="Search Wikipedia"
                  variant="standard"
                  topBar
                />
              </SearchForm>
            </FormWrapper>
          }

          <Navigation />



        </TopBarGrid>
      </Container>
    </Header>
  );
};

export default TopBar;