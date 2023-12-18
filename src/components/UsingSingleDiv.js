import { useState } from "react";
import "./UsingSingleDiv.css";

const UsingSingleDiv = () => {
  const [percentageCompletion, setPercentageCompletion] = useState(0);

  const start = () => {
    for (let i = 1; i <= 100; i++) {
      setTimeout(() => {
        setPercentageCompletion(i);
      }, 1000 * i);
    }
  };

  return (
    <>
      <h1>Using Single Div</h1>
      <div className="progressbar">
        <div
          style={{ width: `${percentageCompletion}%` }}
          className="inner_progressbar"
        ></div>
      </div>
      <button onClick={start}>Start</button>
    </>
  );
};

export default UsingSingleDiv;
