import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "./config/ENDPOINTS_CONFIG";
import Step1 from "./Pages/Landing/Step1";
import Step2 from "./Pages/Landing/Step2";
import Step3 from "./Pages/Landing/Step3";
import Step4 from "./Pages/Landing/Step4";
import Step5 from "./Pages/Landing/Step5";

function App() {
  const [trainerData, setTrainerData] = useState({});

  async function getTrainerData(id) {
    try {
      const { data } = await axios.get(`${URL.URL_BASE}/trainer/${id}`);
      setTrainerData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.clear();
    getTrainerData(6);
  }, []);

  useEffect(() => {
    console.log(trainerData);
  }, [trainerData]);

  return (
    <div className="App">
      <div className="container">
        <Step1 trainerData={trainerData}></Step1>
        <Step2 trainerData={trainerData}></Step2>
        <Step3 trainerData={trainerData}></Step3>
        <Step4 trainerData={trainerData}></Step4>
        <Step5 trainerData={trainerData}></Step5>
      </div>
    </div>
  );
}

export default App;
