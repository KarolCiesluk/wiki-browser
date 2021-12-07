import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ListItem = styled.li`
  display: grid;
  color: ${({ theme }) => theme.palette.grey[600]};
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  grid-column-gap: 10px;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  word-break: break-word;
`;

export const Button = styled.button`
  background: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  width: 20px;
  height: 20px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ toggleSelected }) => toggleSelected && css`
    color: ${({ theme }) => theme.palette.primary.main};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
  `}

  ${({ remove }) => remove && css`
    border: none;
    color: ${({ theme }) => theme.palette.remove.main};

    &:hover {
      background-color: ${({ theme }) => theme.palette.remove.hover};
    }
  `}
`;

export const StyledLink = styled(Link)`
  margin-left: 24px;
  color: ${({ theme }) => theme.palette.primary.main};
`;