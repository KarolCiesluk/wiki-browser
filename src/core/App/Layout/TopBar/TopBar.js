import { useLocation } from "react-router";

import Container from "../Container";
import { inputValueName, SearchForm, TextInput } from "common";
import { Navigation } from "./Navigation";
import {
  FormWrapper,
  Header,
  LogoLink,
  SearchButton,
  SearchGrid,
  StyledSearchIcon,
  StyledWikiIcon,
  TopBarGrid
} from "./styled";

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <Header>
      <Container as="div">
        <TopBarGrid>

          <LogoLink to="/">
            <StyledWikiIcon />
          </LogoLink>

          {
            pathname !== "/" &&
            <FormWrapper>
              <SearchForm>
                <SearchGrid>

                  <TextInput
                    name={inputValueName}
                    type="text"
                    placeholder="Search Wikipedia"
                    variant="standard"
                  />

                  <SearchButton type="submit">
                    <StyledSearchIcon />
                  </SearchButton>

                </SearchGrid>
              </SearchForm>
            </FormWrapper>
          }

          <Navigation />

        </TopBarGrid>
      </Container>
    </Header >
  );
};

export default TopBar;