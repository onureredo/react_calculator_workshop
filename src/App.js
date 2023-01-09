import Calculator from "./components/Calculator";
import Screen from "./components/Screen";
import Keys from "./components/Keys";
import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState(0);

  function addToScreen(value) {
    if (result.length > 0) {
      setResult((prev) => prev + value);
    } else if (
      (result[result.length - 1] === 0 && value === "0") ||
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      return;
    } else {
      setResult(value);
    }
  };

  function clearResults() {
    setResult(0);
  };

  function calculate() {
    const calculation = eval(result);
    setResult(calculation.toString());
  };

  return (
    <Calculator>
      <Screen result={result} clearResults={clearResults} />
      <Keys addToScreen={addToScreen} calculate={calculate} />
    </Calculator>
  );
};

export default App;
