import React from 'react';

const FlagTw = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-60 -40 240 160" {...props}>
    <rect x={-60} y={-40} width="100%" height="100%" fill="#fe0000" />
    <rect x={-60} y={-40} width="50%" height="50%" fill="#000095" />
    <path id="s4c495e82" d="M8 0L0 30-8 0l8-30M0 8l30-8L0-8l-30 8" fill="#fff" />
    <use xlinkHref="#s4c495e82" transform="rotate(30)" />
    <use xlinkHref="#s4c495e82" transform="rotate(60)" />
    <circle r={17} fill="#000095" />
    <circle r={15} fill="#fff" />
  </svg>
);

export default FlagTw;
