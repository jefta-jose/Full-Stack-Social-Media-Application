import React, { useState } from 'react';
import './Input.scss'

function Input({ value, onChange, onSend }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    onSend(inputValue);
    setInputValue('');
  };

  return (
    <div className="input-container">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Input;