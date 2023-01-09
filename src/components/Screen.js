import React from "react";

const Screen = ({ result, emptyScreen }) => {
  return (
    <div className="top">
      <span onClick={emptyScreen} className="clear">
        C
      </span>
      <div className="screen">{result}</div>
    </div>
  );
};

export default Screen;
