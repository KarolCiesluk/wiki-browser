import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ListItem = styled.li`
  display: grid;
  color: #757575;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  grid-column-gap: 10px;
  padding: 12px 0;
  border-bottom: 1px solid #EAEEF3;
  word-break: break-word;
`;

export const Button = styled.button`
  background: none;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ toggleSelected }) => toggleSelected && css`
    color: #1c76d2;
    border: 2px solid #1c76d2;
  `}

  ${({ remove }) => remove && css`
    border: none;
    color: red;

    &:hover {
      background-color: #ffc6c1;
    }
  `}
`;

export const StyledLink = styled(Link)`
  margin-left: 24px;
  color: #1c76d2;
`;