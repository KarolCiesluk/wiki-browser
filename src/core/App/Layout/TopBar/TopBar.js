import { useLocation } from "react-router";

import Container from "../Container";
import { inputValueName, SearchForm, TextInput } from "common";
import {
  FormWrapper,
  Header,
  LogoLink,
  StyledWikiIcon,
  TopBarGrid
} from "./styled";
import { Navigation } from "./Navigation";

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