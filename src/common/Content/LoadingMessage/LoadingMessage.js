import { PageTitle } from "common";
import { StyledLoader, Wrapper } from "./styled";

const LoadingMessage = () => (
  <Wrapper>
    <PageTitle>
      Loading...
    </PageTitle>

    <StyledLoader />
  </Wrapper>
);

export default LoadingMessage;