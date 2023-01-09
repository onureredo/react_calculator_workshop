import React from "react";

const Keys = ({ addToScreen, calculate }) => {
  return (
    <div className="keys">
      <span onClick={() => addToScreen("7")}>7</span>
      <span onClick={() => addToScreen("8")}>8</span>
      <span onClick={() => addToScreen("9")}>9</span>
      <span onClick={() => addToScreen("+")} className="operator">+</span>

      <span onClick={() => addToScreen("4")}>4</span>
      <span onClick={() => addToScreen("5")}>5</span>
      <span onClick={() => addToScreen("6")}>6</span>
      <span onClick={() => addToScreen("-")} className="operator">-</span>
      
      <span onClick={() => addToScreen("1")}>1</span>
      <span onClick={() => addToScreen("2")}>2</span>
      <span onClick={() => addToScreen("3")}>3</span>
      <span onClick={() => addToScreen("/")} className="operator">/</span>

      <span onClick={() => addToScreen("0")}>0</span>
      <span onClick={() => addToScreen(".")}>.</span>
      <span onClick={calculate} className="eval">=</span>
      <span onClick={() => addToScreen("*")} className="operator">x</span>
    </div>
  );
};

export default Keys;
