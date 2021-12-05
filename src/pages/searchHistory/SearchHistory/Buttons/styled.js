import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
  color: #757575;
  line-height: 1;
`;

export const DeleteButton = styled.button`
  color: red;
  border: none;
  text-transform: uppercase;
  background: none;
  margin: 0;
  padding: 8px 0;
  cursor: pointer;
  transition: transform 0.1s;

  ${({ clear }) => clear && css`
    color: #1976d2;
  `}

  &:hover {
    transform: scale(1.03);
  }
`;