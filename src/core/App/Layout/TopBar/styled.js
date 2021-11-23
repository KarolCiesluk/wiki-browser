import styled from "styled-components";
import { FaWikipediaW } from 'react-icons/fa';

export const Header = styled.header`
  border-bottom: 1px solid #EAEEF3;
  padding: 14px 0;
`;

export const TopBarGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  align-items: center;
  width: 100%;
`;

export const StyledWikiIcon = styled(FaWikipediaW)`
  width: 56px;
  height: auto;
  color: #1483fb;
`;

export const FormWrapper = styled.div`
  align-self: start;
  justify-self: end;
`;

