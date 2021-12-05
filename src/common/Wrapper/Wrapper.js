import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
  border-radius: 4px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media(max-width: 700px) {
    padding: 22px;
  }
`;

export default Wrapper;