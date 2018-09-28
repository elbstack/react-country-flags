import React from 'react';

const FlagNe = props => (
  <svg viewBox="0 0 700 600" {...props}>
    <path fill="#0DB02B" d="M0 0h700v600H0z" />
    <path fill="#FFF" d="M0 0h700v400H0z" />
    <path fill="#e05206" d="M0 0h700v200H0z" />
    <circle cx={350} cy={300} r={85} fill="#e05206" />
  </svg>
);

export default FlagNe;
