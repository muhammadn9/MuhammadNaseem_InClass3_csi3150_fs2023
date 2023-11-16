import React, { useState } from "react";
import "./CounterComponent.css";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-value">{counter}</div>
      <div className="counter-buttons">
        <button onClick={decreaseCounter}>-</button>
        <button onClick={increaseCounter}>+</button>
      </div>
    </div>
  );
};

export default CounterComponent;
