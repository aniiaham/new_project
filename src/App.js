import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING')
  
  const toggleParagraph = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraph}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
