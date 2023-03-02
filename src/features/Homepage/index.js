import { Container } from "./Container";
import { MyInfo } from "./Header";
import { Skills } from "./Skills";

function Homepage() {
  return (
    <Container>
      <MyInfo />
      <Skills />
    </Container>
  );
}

export default Homepage;
