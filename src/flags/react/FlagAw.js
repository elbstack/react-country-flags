import React from 'react';

const FlagAw = props => (
  <svg viewBox="0 0 27 18" {...props}>
    <path fill="#4189DD" d="M0 0h27v18H0V0z" />
    <path fill="#F9D616" d="M0 12h27v1H0v1h27v1H0v-3z" />
    <path
      fill="#D21034"
      stroke="#FFF"
      strokeWidth={0.2}
      strokeMiterlimit={10}
      d="M4.625 3.375L4 1.35l-.625 2.025L1.35 4l2.025.625L4 6.65l.625-2.025L6.65 4z"
    />
  </svg>
);

export default FlagAw;
