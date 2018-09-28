import React from 'react';

const FlagMk = props => (
  <svg viewBox="0 0 56 28" {...props}>
    <path fill="#d20000" d="M0 0h56v28H0z" />
    <g fill="#ffe600">
      <path d="M0 0h8.4L28 13.5 47.6 0H56L0 28h8.4L28 14.5 47.6 28H56zm56 11.2v5.6L0 11.2v5.6zM25.2 0L28 12l2.8-12zm0 28L28 16l2.8 12z" />
      <circle cx={28} cy={14} r={4.5} stroke="#d20000" />
    </g>
  </svg>
);

export default FlagMk;
