import React, { useState, useEffect } from 'react';

const CounterWithEffect = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    
    setMessage(`Current count is ${count}`);
  }, [count]); 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter with Effect</h1>
      <p>{message}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterWithEffect;
