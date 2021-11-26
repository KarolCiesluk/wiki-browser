import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  grid-gap: 16px;

  @media(max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  border-radius: 4px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background-color: #1976d217;
  }
`;

export const StyledLink = styled(Link)`
  display: grid;
  grid-template-rows: 200px 1fr;
  height: 100%;
  padding: 16px;
  text-decoration: none;
  color: inherit;

  @media(max-width: 500px) {
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
`;

export const Title = styled.h2`
  word-break: break-word;

  @media(max-width: 700px) {
    font-size: 20px;
  }
`;