import styled from "styled-components";

const PageTitle = styled.h1`
  font-weight: normal;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 26px;
  }
`;

export default PageTitle;