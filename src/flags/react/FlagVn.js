import React from 'react';

const FlagVn = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-15 -10 30 20" {...props}>
    <path fill="#DA251d" d="M-20-15h40v30h-40z" />
    <g id="sbd7c3fad" transform="translate(0 -6)">
      <path id="sf915d7b8" fill="#FF0" transform="rotate(18)" d="M0 0v6h4" />
      <use xlinkHref="#sf915d7b8" transform="scale(-1 1)" />
    </g>
    <g id="sca97a1a1" transform="rotate(72)">
      <use xlinkHref="#sbd7c3fad" />
      <use xlinkHref="#sbd7c3fad" transform="rotate(72)" />
    </g>
    <use xlinkHref="#sca97a1a1" transform="scale(-1 1)" />
  </svg>
);

export default FlagVn;
