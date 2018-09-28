import React from 'react';

const FlagIs = props => (
  <svg viewBox="0 0 2500 1800" {...props}>
    <path d="M0 0h2500v1800H0" fill="#003897" />
    <path d="M700 0h400v1800H700M0 700h2500v400H0" fill="#fff" />
    <path d="M800 0h200v1800H800M0 800h2500v200H0" fill="#d72828" />
  </svg>
);

export default FlagIs;
