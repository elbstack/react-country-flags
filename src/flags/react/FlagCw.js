import React from 'react';

const FlagCw = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 36" {...props}>
    <path fill="#002b7f" d="M0 0h54v36H0z" />
    <path d="M0 22.5h54V27H0z" fill="#f9e814" />
    <g fill="#fff" id="s493bbfcf">
      <g id="s6b1ec82d">
        <g id="s4581c9ca">
          <path d="M12 8v4h2z" transform="rotate(18 12 8)" id="sbbe6da30" />
          <use xlinkHref="#sbbe6da30" x={-24} transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#s4581c9ca" transform="rotate(72 12 12)" />
      </g>
      <use xlinkHref="#s4581c9ca" transform="rotate(-72 12 12)" />
      <use xlinkHref="#s6b1ec82d" transform="rotate(144 12 12)" />
    </g>
    <use xlinkHref="#s493bbfcf" x={-4} y={-4} transform="scale(.75)" />
  </svg>
);

export default FlagCw;
