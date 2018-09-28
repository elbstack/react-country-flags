import React from 'react';

const FlagPa = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 24" {...props}>
    <path fill="#fff" d="M0 0h36v24H0z" />
    <g fill="#005293">
      <g id="s95443cde" transform="translate(9 6)">
        <g id="s22632413">
          <path id="s94eef583" d="M0-3v3h1.5z" transform="rotate(18 0 -3)" />
          <use xlinkHref="#s94eef583" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#s22632413" transform="rotate(72)" />
        <use xlinkHref="#s22632413" transform="rotate(144)" />
        <use xlinkHref="#s22632413" transform="rotate(216)" />
        <use xlinkHref="#s22632413" transform="rotate(288)" />
      </g>
      <path d="M0 12h18v12H0z" />
    </g>
    <g fill="#d21034">
      <path d="M18 0h18v12H18z" />
      <use xlinkHref="#s95443cde" x={18} y={12} />
    </g>
  </svg>
);

export default FlagPa;
