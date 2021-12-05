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
  background-color: #00000080;
  backdrop-filter: blur(2px);
  transition: opacity 0.4s;
  z-index: 1;

  ${({ open }) => open && css`
    visibility: visible;
    opacity: 1;
  `}
`;

export const StyledDrawer = styled.aside`
  background-color: white;
  color: #757575;
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
  box-shadow:
    rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px,
    rgb(0 0 0 / 12%) 0px 6px 30px 5px;
  transition: top 0.4s;

  ${({ active }) => active && css`
    top: 0;
  `}
`;

export const DrawerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EAEEF3;
`;

export const DrawerTitle = styled.h2`
  border: none;
  font-size: 28px;
  color: inherit;
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
`;