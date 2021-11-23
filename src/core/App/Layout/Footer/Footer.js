import Container from "../Container";
import { Copyright, StyledFooter } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container as="div" footer>
        <Copyright>© 2021 | Coded by Karol Cieśluk</Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;