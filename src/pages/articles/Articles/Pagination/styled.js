import styled, { css } from "styled-components";

import { ReactComponent as Arrow } from "./arrow.svg";

export const Wrapper = styled.nav`
  margin-top: 75px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    margin-top: 32px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  border: none;
  background: none;
  cursor: pointer;
  min-width: 3ch;
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.shape.paginationBorderRadius}px;
  margin: auto 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.duration.shorter}ms;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: 4px 8px;
  }

  &:focus-visible {
    outline: none;
    background-color: ${({ theme }) => theme.palette.grey[200]};
  }

  &:hover {
    outline: none;
    background-color: ${({ theme }) => theme.palette.grey[200]};
  }

  ${({ selected }) => selected && css`
    color: ${({ theme }) => theme.palette.common.white};
    background: ${({ theme }) => theme.palette.common.black};

    &:hover {
    outline: none;
    background: ${({ theme }) => theme.palette.common.black};
    }

  `}

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;

    &:hover {
      background: none;
    }
  `}
`;

export const Strong = styled.strong`
  display: inline-flex;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding: 5px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: 3px;
  }
`;

const arrowGap = 6;

export const StyledArrow = styled(({
  left,
  ...otherProps
}) => <Arrow {...otherProps} />)`
  margin-left: ${arrowGap}px;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    margin: 0;
  }

  ${({ left }) => left && css`
    transform: rotate(180deg);
    margin-left: 0;
    margin-right: ${arrowGap}px;
  `}
`;

export const LinkText = styled.span`
  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    display: none;
  }
`;

export const Dots = styled.span`
  margin: auto 4px;
  min-width: 12px;
`;