import { NavigationLink, NavigationList, StyledNavigation } from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationList>

        <li>
          <NavigationLink to="/">
            Home
          </NavigationLink>
        </li>

        <li>
          <NavigationLink to="history">
            Search History
          </NavigationLink>
        </li>

      </NavigationList>
    </StyledNavigation>
  );
};

export default Navigation;