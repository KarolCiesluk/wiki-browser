import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavigation = styled.nav`
  grid-column: 3;
  justify-self: end;

  @media(max-width: 600px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const NavigationLink = styled(Link)`
  border: 1px solid #E5E8EC;
  padding: 8px 10px;
  margin: 4px;
  border-radius: 10px;
  color: #007FFF;
  text-decoration: none;

  &:hover {
    background-color: #e5e8ec2e;
  }
`;