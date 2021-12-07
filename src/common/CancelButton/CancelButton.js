import styled, { css } from "styled-components";

const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  cursor: pointer;
  padding: 4px;
  font-size: 24px;
  color: inherit;
  transition: background ${({ theme }) => theme.transitions.duration.short}ms;

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }

  ${({ cancelSelected }) => cancelSelected && css`
    color: inherit;
    margin-right: 10px;
  `}
`;

export default CancelButton;