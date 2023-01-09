import React from "react";

const Screen = ({ result, clearResults }) => {
  return (
    <div className="top">
      <span onClick={clearResults} className="clear">
        C
      </span>
      <div className="screen">{result}</div>
    </div>
  );
};

export default Screen;
