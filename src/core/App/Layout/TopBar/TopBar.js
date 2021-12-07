import { useLocation } from "react-router";

import Container from "../Container";
import { inputValueName, SearchForm, TextInput } from "common";
import { toHome } from "core";
import { Navigation } from "./Navigation";
import {
  FormWrapper,
  Header,
  LogoImage,
  LogoLink,
  LogoText,
  SearchButton,
  SearchGrid,
  StyledSearchIcon,
  TopBarGrid
} from "./styled";
import wikipediaIcon from "./wikipediaIcon.png";

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <Header>
      <Container as="div">
        <TopBarGrid>

          <LogoLink to={toHome()}>

            <LogoImage
              src={wikipediaIcon}
              alt="logo"
            />

            <LogoText>
              Wiki browser
            </LogoText>

          </LogoLink>

          {
            pathname !== "/" &&
            <FormWrapper>
              <SearchForm>
                <SearchGrid>

                  <TextInput
                    name={inputValueName}
                    type="text"
                    label="Search Wikipedia"
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
    </Header>
  );
};

export default TopBar;