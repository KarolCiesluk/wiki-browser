import Footer from "./Footer";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;