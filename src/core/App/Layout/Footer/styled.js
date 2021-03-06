import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.palette.grey[200]};
  margin-top: 20px;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    margin-top: 14px;
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.palette.grey[600]};
`;