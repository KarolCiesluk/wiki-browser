import { FiLoader } from "react-icons/fi";

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled(FiLoader)`
  margin-top: 16px;
  animation: ${rotate} 2s linear infinite;
  width: 86px;
  height: auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-top: 8px;
    width: 56px;
  }
`;