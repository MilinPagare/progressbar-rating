import React, { useEffect, useState } from "react";
import "./UsingMultipleDiv.css";

const UsingMultipleDiv = () => {
  const [progress, setProgress] = useState({
    progressOne: false,
    progressTwo: false,
    progressThree: false,
    progressFour: false,
    progressFive: false,
  });
  const [pro, setPro] = useState(0);

  const start = () => {
    for (let i = 0; i < Object.keys(progress).length; i++) {
      setTimeout(() => {
        // const tempObj = { ...progress, [Object.keys(progress)[i]]: true };
        setProgress((prevProgress) => ({
          ...prevProgress,
          [Object.keys(prevProgress)[i]]: true,
        }));
      }, 1000 * i);
    }
  };

  return (
    <div>
      <div className="bar">
        {Object.keys(progress).map((item, index) => (
          <div
            key={index}
            className={progress[item] ? "complete" : "incomplete"}
          ></div>
        ))}
      </div>
      <div>
        <button onClick={start}>Start</button>
      </div>
    </div>
  );
};

export default UsingMultipleDiv;
