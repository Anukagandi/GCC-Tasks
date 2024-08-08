import React, { useRef } from 'react';

const FocusInput = () => {
  
  const inputRef = useRef(null);

  
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>React Ref Example</h1>
      <input
        type="text"
        placeholder="Click the button to focus me"
        ref={inputRef} 
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
