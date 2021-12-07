import { toHistory, toHome } from "core";
import { NavigationLink, NavigationList, StyledNavigation } from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationList>

        <li>
          <NavigationLink to={toHome()}>
            Home
          </NavigationLink>
        </li>

        <li>
          <NavigationLink to={toHistory()}>
            Search History
          </NavigationLink>
        </li>

      </NavigationList>
    </StyledNavigation>
  );
};

export default Navigation;