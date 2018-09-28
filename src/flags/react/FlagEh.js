import React from 'react';

const FlagEh = props => (
  <svg viewBox="0 0 600 300" {...props}>
    <path d="M0 0h600v150H0z" />
    <path fill="#007a3d" d="M0 150h600v150H0z" />
    <path fill="#fff" d="M0 100h600v100H0z" />
    <path d="M0 0l200 150L0 300z" fill="#c4111b" />
    <circle cx={300} cy={150} r={40} fill="#c4111b" />
    <circle cx={315} cy={150} r={40} fill="#fff" />
    <path
      d="M289.263 174.22l17.056-12.192 16.923 12.377-6.325-19.99 17-12.27-20.965-.16-6.416-19.961-6.632 19.89-20.966-.067 16.867 12.454-6.542 19.92z"
      fill="#c4111b"
    />
  </svg>
);

export default FlagEh;
