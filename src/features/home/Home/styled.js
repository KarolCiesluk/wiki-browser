import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;
  margin: 20px auto;
  padding: 40px 26px;
  border-radius: 4px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    @media(max-width: 500px) {
      grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 16px;
  border: 1px solid rgba(25,118,210,0.5);
  font-weight: 500;
  font-size: 14px;
  color: #1976d2;
  text-transform: uppercase;
  background-color: unset;

  &:hover {
    background-color: rgba(25,118,210,0.04);
  }
`;