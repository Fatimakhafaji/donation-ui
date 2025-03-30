import React from 'react';

const ProgressBar = ({ raised, goal }) => {
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="progress-text">{percentage}%</div>
    </div>
  );
};

export default ProgressBar;