import styled, { css } from "styled-components";

const MessageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;

  ${({ error }) => error && css`
    grid-gap: 18px;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
      grid-gap: 12px;
    }
  `}

  ${({ loader }) => loader && css`
    color: ${({ theme }) => theme.palette.grey[600]};
  `}
`;

export default MessageWrapper;