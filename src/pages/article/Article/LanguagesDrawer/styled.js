import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { List } from "common";

export const Background = styled.div`
  visibility: hidden;
  opacity: 0;
  height: 100%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palette.background.dark};
  backdrop-filter: blur(2px);
  transition: opacity ${({ theme }) => theme.transitions.duration.complex}ms;
  z-index: 1;

  ${({ open }) => open && css`
    visibility: visible;
    opacity: 1;
  `}
`;

export const StyledDrawer = styled.aside`
  background-color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.grey[600]};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: -200%;
  max-height: 100vh;
  left: 0;
  width: 100vw;
  z-index: 1;
  box-shadow: ${({ theme }) => theme.shadows[5]};
  transition: top ${({ theme }) => theme.transitions.duration.complex}ms;

  ${({ active }) => active && css`
    top: 0;
  `}
`;

export const DrawerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
`;

export const DrawerTitle = styled.h2`
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 18px;
  }
`;

export const LanguagesList = styled(List)`
  margin: 4px 0 0;
  display: flex;
  flex-wrap: wrap;
  max-height: 100vh;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  margin: 12px 6px;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  font-size: 18px;

  &:visited {
    color: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 16px;
  }
`;