import { useLocation } from "react-router";
import { AiOutlineSearch } from 'react-icons/ai';

import Container from "../Container";
import { inputValueName, SearchForm, TextInput } from "common";
import {
  FormWrapper,
  Header,
  LogoLink,
  SearchButton,
  SearchGrid,
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
                <SearchGrid>

                  <TextInput
                    name={inputValueName}
                    type="text"
                    label="Search Wikipedia"
                    variant="standard"
                  />

                  <SearchButton type="submit">
                    <AiOutlineSearch style={{ width: 16, height: "auto", color: "#666666" }} />
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