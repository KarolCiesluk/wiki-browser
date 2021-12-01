import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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

export const StyledMenu = styled.aside`
  background-color: white;
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
  border-bottom: 1px solid #949494;
`;

export const DrawerTitle = styled.h2`
  border: none;
`;

export const ExitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px;
  font-size: 20px;

  &:hover {
    background-color: #0000000a;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 4px 0 0;
  display: flex;
  flex-wrap: wrap;
  max-height: 100vh;
  overflow-y: auto;
`;

export const LinkItem = styled.li`
  margin: 6px;
  padding: 6px 0;
`;

export const StyledLink = styled(Link)`
  color: #757575;

  &:visited {
    color: #757575;
  }
`;