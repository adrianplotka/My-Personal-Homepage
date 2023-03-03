import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { MyInfo } from "./Header";
import { Skills } from "./Skills";

function Homepage() {
  return (
    <Container>
      <ThemeSwitch/>
      <MyInfo />
      <Skills />
      <Footer/>
    </Container>
  );
}

export default Homepage;
