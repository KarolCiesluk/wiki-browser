import { ErrorMessage } from "./ErrorMessage";
import { LoadingMessage } from "./LoadingMessage";

const Content = ({ status, children }) => {
  switch (status) {
    case "loading":
      return <LoadingMessage />;

    case "error":
      return <ErrorMessage />;

    case "success":
      return children;

    case "initial":
      return null;

    default:
      throw new Error("Incorrect status");
  }
};

export default Content;