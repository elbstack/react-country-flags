import React from 'react';

const FlagTl = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-3 -6 24 12" {...props}>
    <path d="M21 6V-6H-3V6z" fill="#dc241f" />
    <path d="M-3-6V6L9 0z" fill="#ffc726" />
    <path d="M-3-6V6l8-6z" />
    <g transform="rotate(-26.565)">
      <g id="s21cd84c8">
        <g id="s74890357">
          <path d="M0-2.1V0h1z" fill="#fff" transform="rotate(18 0 -2.1)" id="s152cec9a" />
          <use xlinkHref="#s152cec9a" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#s74890357" transform="rotate(72)" />
      </g>
      <use xlinkHref="#s74890357" transform="rotate(-72)" />
      <use xlinkHref="#s21cd84c8" transform="rotate(144)" />
    </g>
  </svg>
);

export default FlagTl;
