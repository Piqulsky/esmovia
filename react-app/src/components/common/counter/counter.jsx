import "./counter.css";
import React, { useState } from "react";

export function Counter({ incrementBy }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + incrementBy);
  };

  const decrement = () => {
    setCount(count - incrementBy);
  };

  return (
    <div className="Counter">
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
