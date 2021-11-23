import styled from "styled-components";

export const Header = styled.h1`
  display: inline-block;
  color: #0e1111;
  border-bottom: 2px dashed #1483fb;
  padding-bottom: 4px;

  @media(max-width: 700px) {
    font-size: 26px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 14px;
  padding: 40px;
  border-radius: 4px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media(max-width: 700px) {
    padding: 22px;
  }
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