import styled, { css } from "styled-components";

import { ReactComponent as Arrow } from "./arrow.svg";

export const Wrapper = styled.nav`
  margin-top: 75px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 500px) {
    margin-top: 32px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  font-family: sans-serif;
  font-weight: 300;
  border: none;
  background: none;
  cursor: pointer;
  min-width: 3ch;
  padding: 6px 10px;
  border-radius: 16px;
  margin: auto 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  @media(max-width: 500px) {
    padding: 4px 8px;
  }

  &:focus-visible {
    outline: none;
  }

  &:hover {
    outline: none;
  }

  ${({ selected }) => selected && css`
    color: white;
    background: black;
  `}

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;

    &:hover {
      box-shadow: none;
    }
  `}
`;

export const Strong = styled.strong`
  display: inline-flex;
  align-items: center;

  @media(max-width: 500px) {
    padding: 5px;
  }

  @media(max-width: 500px) {
    padding: 3px;
  }
`;

const arrowGap = 6;

export const StyledArrow = styled(({
  left,
  ...otherProps
}) => <Arrow {...otherProps} />)`
  margin-left: ${arrowGap}px;

  @media(max-width: 500px) {
    margin: 0;
  }

  ${({ left }) => left && css`
    transform: rotate(180deg);
    margin-left: 0;
    margin-right: ${arrowGap}px;
  `}
`;

export const LinkText = styled.span`
  @media(max-width: 500px) {
    display: none;
  }
`;

export const Dots = styled.span`
  margin: auto 4px;
  min-width: 12px;
`;