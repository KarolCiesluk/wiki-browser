import styled from "styled-components";

const Title = styled.h2`
  line-height: 1;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  @media(max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 20px;
  }
`;

export default Title;