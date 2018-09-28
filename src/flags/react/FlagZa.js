import React from 'react';

const FlagZa = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 9 6" {...props}>
    <clipPath id="s62718bce">
      <path d="M0 0l4.5 3L0 6" id="s55eec673" />
    </clipPath>
    <clipPath id="se7780f5a">
      <path d="M0 0h9v6H0z" />
    </clipPath>
    <g clipPath="url(#se7780f5a)">
      <path d="M0 0v6h9V0z" fill="#002395" />
      <path d="M0 0v3h9V0z" fill="#de3831" />
      <g strokeWidth={2} stroke="#fff">
        <path d="M0 0l4.5 3L0 6m4.5-3H9" id="s549537da" />
        <use xlinkHref="#s55eec673" stroke="#ffb612" clipPath="url(#s62718bce)" />
      </g>
      <use xlinkHref="#s549537da" fill="none" stroke="#007a4d" strokeWidth={1.2} />
    </g>
  </svg>
);

export default FlagZa;
