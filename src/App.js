import { Container, Row } from "react-bootstrap";
import "./assets/styles/styles.scss";
import Step1 from "./Pages/Landing/Step1";
import Step2 from "./Pages/Landing/Step2";
import Step3 from "./Pages/Landing/Step3";
import Step4 from "./Pages/Landing/Step4";
import Step5 from "./Pages/Landing/Step5";

function App() {
  return (
    <Container fluid>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </Container>
  );
}

export default App;
