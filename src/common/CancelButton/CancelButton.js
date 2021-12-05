import styled, { css } from "styled-components";

const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px;
  font-size: 24px;
  color: inherit;

  &:hover {
    background-color: #0000000a;
  }

  ${({ cancelSelected }) => cancelSelected && css`
    color: inherit;
    margin-right: 10px;
  `}
`;

export default CancelButton;