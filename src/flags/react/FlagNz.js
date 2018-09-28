import React from 'react';

const FlagNz = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 600" {...props}>
    <defs>
      <clipPath id="sa3487802">
        <path d="M0 0h600v300H0z" />
      </clipPath>
      <clipPath id="sa841c70d">
        <path d="M0 0l300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" />
      </clipPath>
      <g id="s4ed22915">
        <g id="s7f67afd8">
          <path d="M0 0v.5L1 0z" transform="translate(0 -.325)" />
          <path d="M0 0v-.5L1 0z" transform="rotate(-36 .5 -.162)" />
        </g>
        <use xlinkHref="#s7f67afd8" transform="scale(-1 1)" />
        <use xlinkHref="#s7f67afd8" transform="rotate(72 0 0)" />
        <use xlinkHref="#s7f67afd8" transform="rotate(-72 0 0)" />
        <use xlinkHref="#s7f67afd8" transform="scale(-1 1) rotate(72)" />
      </g>
    </defs>
    <path fill="#00247d" d="M0 0h1200v600H0z" />
    <path stroke="#fff" d="M0 0l600 300M0 300L600 0" strokeWidth={60} clipPath="url(#sa3487802)" />
    <path stroke="#cc142b" d="M0 0l600 300M0 300L600 0" strokeWidth={40} clipPath="url(#sa841c70d)" />
    <path stroke="#fff" d="M300 0v300M0 150h600" strokeWidth={100} clipPath="url(#sa3487802)" />
    <path stroke="#cc142b" d="M300 0v300M0 150h600" strokeWidth={60} clipPath="url(#sa3487802)" />
    <g>
      <use xlinkHref="#s4ed22915" fill="#fff" transform="matrix(45.4 0 0 45.4 900 120)" />
      <use xlinkHref="#s4ed22915" fill="#cc142b" transform="matrix(30 0 0 30 900 120)" />
      <g transform="rotate(82 900 240)">
        <use xlinkHref="#s4ed22915" fill="#fff" transform="rotate(-82 519.022 -457.666) scale(40.4)" />
        <use xlinkHref="#s4ed22915" fill="#cc142b" transform="rotate(-82 519.022 -457.666) scale(25)" />
      </g>
      <g transform="rotate(82 900 240)">
        <use xlinkHref="#s4ed22915" fill="#fff" transform="rotate(-82 668.57 -327.666) scale(45.4)" />
        <use xlinkHref="#s4ed22915" fill="#cc142b" transform="rotate(-82 668.57 -327.666) scale(30)" />
      </g>
      <g>
        <use xlinkHref="#s4ed22915" fill="#fff" transform="matrix(50.4 0 0 50.4 900 480)" />
        <use xlinkHref="#s4ed22915" fill="#cc142b" transform="matrix(35 0 0 35 900 480)" />
      </g>
    </g>
  </svg>
);

export default FlagNz;
