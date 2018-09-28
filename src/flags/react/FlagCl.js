import React from 'react';

const FlagCl = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-4 -4 24 16" {...props}>
    <path d="M20 12H-4V-4h24z" fill="#d52b1e" />
    <path d="M4 4h16v-8H-4z" fill="#fff" />
    <path d="M4 4h-8v-8h8z" fill="#0039a6" />
    <g id="s39d4d252">
      <g id="sd7c065a0">
        <path d="M0-2v2h1z" fill="#fff" transform="rotate(18 0 -2)" id="s2b94775c" />
        <use xlinkHref="#s2b94775c" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#sd7c065a0" transform="rotate(72)" />
    </g>
    <use xlinkHref="#sd7c065a0" transform="rotate(-72)" />
    <use xlinkHref="#s39d4d252" transform="rotate(144)" />
  </svg>
);

export default FlagCl;
