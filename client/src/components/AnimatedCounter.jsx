import React from 'react';
import { useCounter } from '../hooks/useCounter';

const AnimatedCounter = ({ target, suffix, label }) => {
  const [ref, count] = useCounter(target);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <div className="text-light-blue/70 text-lg">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
