import Container from "./Container";
import Footer from "./Footer";
import TopBar from "./TopBar";
import { StyledLayout } from "./styled";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <TopBar />

      <Container>
        {children}
      </Container>

      <Footer />
    </StyledLayout>
  );
};

export default Layout;