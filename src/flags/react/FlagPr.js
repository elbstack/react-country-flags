import React from 'react';

const FlagPr = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 45 30" {...props}>
    <path fill="#ED0000" d="M0 0h45v30H0z" />
    <path stroke="#FFF" strokeWidth={6} d="M0 9h45M0 21h45" />
    <path fill="#0050F0" d="M0 0l25.98 15L0 30z" />
    <g fill="#FFF" transform="matrix(5 0 0 5 8.66 15)">
      <g id="s53d7d484">
        <path id="s80f072d4" transform="rotate(18 3.157 -.5)" d="M0 0v1h.5z" />
        <use xlinkHref="#s80f072d4" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#s53d7d484" transform="rotate(72)" />
      <use xlinkHref="#s53d7d484" transform="rotate(-72)" />
      <use xlinkHref="#s53d7d484" transform="rotate(144)" />
      <use xlinkHref="#s53d7d484" transform="rotate(-144)" />
    </g>
  </svg>
);

export default FlagPr;
