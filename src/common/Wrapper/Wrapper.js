import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows[5]};

  @media(max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding: 22px;
  }
`;

export default Wrapper;