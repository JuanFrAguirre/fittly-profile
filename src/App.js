import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { URL } from "./config/ENDPOINTS_CONFIG";
import Step1 from "./Pages/Landing/Step1";
import Step2 from "./Pages/Landing/Step2";
import Step3 from "./Pages/Landing/Step3";
import Step4 from "./Pages/Landing/Step4";
import Step5 from "./Pages/Landing/Step5";

function App() {
  const [trainerData, setTrainerData] = useState({});
  const [loadingData, setLoadingData] = useState(true);

  async function getTrainerData(id) {
    try {
      const { data } = await axios.get(`${URL.URL_BASE}/trainer/${id}`);
      setTrainerData(data);
      setLoadingData(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.clear();
    getTrainerData(1);
  }, []);

  return (
    <div className="App">
      <Container fluid className="m-0">
        <Container>
          {loadingData && (
            <>
              <div className="loading">
                <h1>Loading Data...</h1>
              </div>
            </>
          )}

          <Step1 trainerData={trainerData}></Step1>
          <Step2 trainerData={trainerData}></Step2>
          <Step3 trainerData={trainerData}></Step3>
          <Step4 trainerData={trainerData}></Step4>
          <Step5 trainerData={trainerData}></Step5>
        </Container>
      </Container>
    </div>
  );
}

export default App;
