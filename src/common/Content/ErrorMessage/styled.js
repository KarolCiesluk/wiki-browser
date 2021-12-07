import styled from "styled-components";
import { IoWarningOutline } from "react-icons/io5";

export const WarningIcon = styled(IoWarningOutline)`
  width: 86px;
  height: auto;
  color: ${({ theme }) => theme.palette.error.light};

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    width: 56px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 22px;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 18px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 14px;
  }
`;