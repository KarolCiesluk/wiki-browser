import styled, { css } from "styled-components";

const Container = styled.main`
  max-width: 960px;
  margin: auto;
  padding: 12px;
  width: 100%;

  ${({ footer }) => footer && css`
    text-align: center;
  `}
`;

export default Container;