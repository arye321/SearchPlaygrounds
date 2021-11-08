import "./styles.css";
import { Mainform } from "./Mainform";
import { useState, useEffect } from "react";
import JsonData from "./data/data.json";

export default function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Mainform data={landingPageData.Mainform} />
    </div>
  );
}
