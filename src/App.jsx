import { useState } from "react";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";
import "./index.css";

function App() {
  const [inputValues, setInputValues] = useState();

  return (
    <div className="app">
      <InputSection setInputValues={setInputValues} />
      <OutputSection inputValues={inputValues} />
    </div>
  );
}

export default App;
