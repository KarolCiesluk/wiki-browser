import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
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
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.palette.common.black};
  align-self: center;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`;

export const FormWrapper = styled.div`
  align-self: end;
  justify-self: end;
  min-width: 250px;

  @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
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
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
`;

export const StyledSearchIcon = styled(AiOutlineSearch)`
  width: 14px;
  height: auto;
  color: ${({ theme }) => theme.palette.grey[600]};
`;