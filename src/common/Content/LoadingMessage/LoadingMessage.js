import { PageTitle } from "common";
import { MessageWrapper } from "../MessageWrapper";
import { StyledLoader } from "./styled";

const LoadingMessage = () => (
  <MessageWrapper loader>
    <PageTitle>
      Loading…
    </PageTitle>
    <StyledLoader />
  </MessageWrapper>
);

export default LoadingMessage;