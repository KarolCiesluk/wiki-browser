import styled from "styled-components";
import { Link } from "react-router-dom";

import { List } from "common";

export const ArticleList = styled(List)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  grid-gap: 16px;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows[5]};
  transition:
    transform ${({ theme }) => theme.transitions.duration.short}ms,
    color ${({ theme }) => theme.transitions.duration.short}ms;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.action.activeDenim};
  }
`;

export const StyledLink = styled(Link)`
  display: grid;
  grid-template-rows: 200px 1fr;
  height: 100%;
  padding: 16px;
  text-decoration: none;
  color: inherit;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 8px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 200px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const TextWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.palette.grey[600]};
  line-height: 1.2;
`;