import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="loading-screen">
      <div className="spinner-glow"></div>
      <h4 className="loading-text">{message}</h4>
    </div>
  );
};

export default LoadingSpinner;