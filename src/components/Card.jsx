import React from 'react';

const Card = ({ children }) => {
  const cardStyle = {
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
