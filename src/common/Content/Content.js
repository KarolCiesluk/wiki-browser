const Content = ({ status, children }) => {
  switch (status) {
    case "loading":
      return <div>Loading…</div>;

    case "error":
      return <div>Error!</div>;

    case "success":
      return children;

    case "initial":
      return null;

    default:
      throw new Error("Incorrect status");
  }
};

export default Content;