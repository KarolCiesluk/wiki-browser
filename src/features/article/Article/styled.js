import styled from "styled-components";

import { Header } from "common";

export const ArticleHeader = styled(Header)`
    border: none;
    display: flex;
    align-items: center;
`;

export const LanguageButton = styled.button`
  border: 1px solid #E5E8EC;
  border-radius: 10px;
  padding: 4px 5px;
  margin-right: 6px;
  background-color: transparent;
  color: #007FFF;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e5e8ec2e;
  }
`;