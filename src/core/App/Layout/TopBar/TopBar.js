import { useLocation } from "react-router";

import SearchForm from "common/SearchForm";
import Container from "../Container";

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <Container as="div">
        Header
        {
          pathname !== "/" &&
          <SearchForm />
        }
      </Container>
    </header>
  );
};

export default TopBar;