import styled from "styled-components";

import { Wrapper } from "common";

export const FormWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 14px;
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 16px;
  border: 1px solid #1976d280;
  font-weight: 500;
  font-size: 14px;
  color: #1976d2;
  text-transform: uppercase;
  background-color: unset;

  &:hover {
    background-color: #1976d20a;
  }

  &:active {
    background-color: #1976d217;
  }
`;