import React from 'react';

function ChoiceButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'block',
        margin: '10px 0',
        padding: '10px 15px',
        backgroundColor: '#4a90e2',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem'
      }}
    >
      {text}
    </button>
  );
}

export default ChoiceButton;