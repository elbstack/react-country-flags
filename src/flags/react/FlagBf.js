import React from 'react';

const FlagBf = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" {...props}>
    <path fill="#009e49" d="M0 0h900v600H0z" />
    <path fill="#ef2b2d" d="M0 0h900v300H0z" />
    <g transform="translate(450 300)" fill="#fcd116">
      <g id="s71e1f406">
        <path id="s7d36ca28" d="M0-100V0h50" transform="rotate(18 0 -100)" />
        <use xlinkHref="#s7d36ca28" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#s71e1f406" transform="rotate(72)" />
      <use xlinkHref="#s71e1f406" transform="rotate(144)" />
      <use xlinkHref="#s71e1f406" transform="rotate(216)" />
      <use xlinkHref="#s71e1f406" transform="rotate(288)" />
    </g>
  </svg>
);

export default FlagBf;
