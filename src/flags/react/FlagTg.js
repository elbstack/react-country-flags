import React from 'react';

const FlagTg = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 809 500" {...props}>
    <path fill="#006a4e" d="M0 0h809v500H0z" />
    <path fill="#ffce00" d="M0 100h809v100H0zM0 300h809v100H0z" />
    <path fill="#d21034" d="M0 0h300v300H0z" />
    <g transform="translate(150 150)" fill="#fff">
      <g id="s07b6308c">
        <path id="s2c3db29c" d="M0-95V0h50" transform="rotate(18 0 -95)" />
        <use xlinkHref="#s2c3db29c" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#s07b6308c" transform="rotate(72)" />
      <use xlinkHref="#s07b6308c" transform="rotate(144)" />
      <use xlinkHref="#s07b6308c" transform="rotate(216)" />
      <use xlinkHref="#s07b6308c" transform="rotate(288)" />
    </g>
  </svg>
);

export default FlagTg;
