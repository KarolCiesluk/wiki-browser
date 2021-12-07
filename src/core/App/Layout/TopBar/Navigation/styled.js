import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { List } from "common";

export const StyledNavigation = styled.nav`
  grid-column: 3;
  justify-self: end;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

export const NavigationList = styled(List)`
  display: flex;
`;

export const NavigationLink = styled(NavLink)`
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  padding: 8px 10px;
  margin: 4px;
  border-radius: ${({ theme }) => theme.shape.bigBorderRadius}px;
  color: ${({ theme }) => theme.palette.primary.light};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }

  &:visited {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  &.active {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
`;