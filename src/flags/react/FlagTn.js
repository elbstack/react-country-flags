import React from 'react';

const FlagTn = props => (
  <svg viewBox="-60 -40 120 80" {...props}>
    <g fill="#E70013">
      <path d="M-60-40H60v80H-60z" />
      <circle fill="#FFF" r={20} />
      <circle r={15} />
      <circle fill="#FFF" cx={4} r={12} />
      <path d="M-5 0l16.281-5.29L1.22 8.56V-8.56L11.28 5.29z" />
    </g>
  </svg>
);

export default FlagTn;
