import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
  color: ${({ theme }) => theme.palette.grey[600]};
  line-height: 1;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    margin-right: 22px;
  }
`;

export const DeleteButton = styled.button`
  color: ${({ theme }) => theme.palette.error.main};
  border: none;
  text-transform: uppercase;
  background: none;
  margin: 0;
  padding: 8px 0;
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.duration.shortest}ms;

  ${({ clear }) => clear && css`
    color: ${({ theme }) => theme.palette.primary.main};
  `}

  &:hover {
    transform: scale(1.03);
  }
`;