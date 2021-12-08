import styled, { css } from "styled-components";

const PageTitle = styled.h1`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  @media(max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 26px;
  }

  ${({ historyIsEmpty }) => historyIsEmpty && css`
    text-align: center;
    color: ${({ theme }) => theme.palette.grey[600]};
  `}
`;

export default PageTitle;