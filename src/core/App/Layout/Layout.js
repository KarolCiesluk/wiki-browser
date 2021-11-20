import Container from "./Container";
import Footer from "./Footer";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />

      <Container>
        {children}
      </Container>

      <Footer />
    </>
  );
};

export default Layout;