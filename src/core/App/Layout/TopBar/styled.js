import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = styled.header`
  border-bottom: 1px solid #EAEEF3;
  padding: 8px 0;
`;

export const TopBarGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 8px;
  align-items: center;
  width: 100%;
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-content: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const LogoImage = styled.img`
  width: 54px;
  height: auto;
`;

export const LogoText = styled.span`
  font-size: 20px;
  color: black;
  align-self: center;
  margin-left: 8px;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const FormWrapper = styled.div`
  align-self: end;
  justify-self: end;
  min-width: 250px;

  @media(max-width: 600px) {
    grid-column: span 2;
    justify-self: center;
    width: 100%;
    max-width: 490px;
  }
`;

export const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  margin-bottom: 10px;
`;

export const SearchButton = styled.button`
  border: none;
  background: none;
  padding: 7px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #eaeef3;
  }
`;

export const StyledSearchIcon = styled(AiOutlineSearch)`
  width: 14px;
  height: auto;
  color: #666666;
`;