import { useLocation } from "react-router";

import SearchForm from "common/SearchForm";

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <header>
      Header
      {
        pathname !== "/" &&
        <SearchForm />
      }
    </header>
  );
};

export default TopBar;