import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const PrimaryButton = styled(Link)`
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
  background-color: unset;

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hoverDenim};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.action.activeDenim};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: 10px;
  }

  ${({ link }) => link && css`
    text-decoration: none;
  `}
`;

export default PrimaryButton;