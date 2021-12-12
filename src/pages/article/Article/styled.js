import styled from "styled-components";

import { PageTitle } from "common";

export const ArticleTitle = styled(PageTitle)`
  display: flex;
  align-items: center;
`;

export const LanguageButton = styled.button`
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  border-radius: ${({ theme }) => theme.shape.bigBorderRadius}px;
  padding: 4px 5px;
  margin-right: 6px;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary.light};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
`;

export const StyledIframe = styled.iframe`
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;