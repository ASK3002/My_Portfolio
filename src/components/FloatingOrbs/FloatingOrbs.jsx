import React from 'react';
import './FloatingOrbs.css';

const FloatingOrbs = () => {
  const orbs = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="floating-orbs-container">
      {orbs.map((i) => (
        <div
          key={i}
          className={`floating-orb orb-${i + 1}`}
          style={{
            '--delay': `${i * 0.5}s`,
            '--duration': `${15 + i * 2}s`,
            '--size': `${60 + i * 15}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
