import React from 'react';

const FlagSt = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2800 1400" {...props}>
    <path fill="#12ad2b" d="M0 0h2800v1400H0z" />
    <path fill="#ffce00" d="M0 400h2800v600H0z" />
    <path d="M0 0v1400l700-700" fill="#d21034" />
    <g id="s90568f6a" transform="translate(1400 700)" fill="#000">
      <g id="s8c3f5a9e">
        <path id="s2f1447cc" d="M0-200V0h100" transform="rotate(18 0 -200)" />
        <use xlinkHref="#s2f1447cc" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#s8c3f5a9e" transform="rotate(72)" />
      <use xlinkHref="#s8c3f5a9e" transform="rotate(144)" />
      <use xlinkHref="#s8c3f5a9e" transform="rotate(216)" />
      <use xlinkHref="#s8c3f5a9e" transform="rotate(288)" />
    </g>
    <use xlinkHref="#s90568f6a" x={700} />
  </svg>
);

export default FlagSt;
