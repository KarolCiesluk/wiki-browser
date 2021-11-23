import styled from "styled-components";
import { FaWikipediaW } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Header = styled.header`
  border-bottom: 1px solid #EAEEF3;
  padding: 14px 0;
`;

export const TopBarGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 30px;
  align-items: center;
  width: 100%;
`;

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const StyledWikiIcon = styled(FaWikipediaW)`
  width: 50px;
  height: auto;
  color: #1483fb;

  @media(max-width: 700px) {
    width: 40px;
  }
`;

export const FormWrapper = styled.div`
  align-self: start;
  justify-self: end;
  min-width: 250px;

  @media(max-width: 600px) {
    grid-column: span 2;
    justify-self: center;
    width: 100%;
    max-width: 490px;
  }
`;

