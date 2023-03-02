import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Container } from "./Container";
import { MyInfo } from "./Header";
import { Skills } from "./Skills";

function Homepage() {
  return (
    <Container>
      <ThemeSwitch/>
      <MyInfo />
      <Skills />
    </Container>
  );
}

export default Homepage;
