import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [timer, setTimer] = useState(0);   
  const [counter, setCounter] = useState(0); 

  const handleInc = (e) => {
    e.preventDefault();
    setTimer(timer + 1);
  };

  const handleDec = (e) => {
    e.preventDefault();
    setTimer(timer - 1);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setTimer(0);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div>
      <h1>Manual Counter : {timer}</h1>
      <button onClick={handleInc}>Add</button>
      <button onClick={handleDec}>Subtract</button>
      <button onClick={handleReset}>Reset</button>

      <h2>Auto Counter (updates every 1s): {counter}</h2>
    </div>
  );
}
