import React from 'react';

const FlagCm = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 60" {...props}>
    <path fill="#007a5e" d="M0 0h30v60H0z" />
    <path fill="#ce1126" d="M30 0h30v60H30z" />
    <path fill="#fcd116" d="M60 0h30v60H60z" />
    <g transform="translate(45 30)" fill="#fcd116">
      <g id="sccbc82c5">
        <path id="sa455f754" d="M0-8v8h4z" transform="rotate(18 0 -8)" />
        <use xlinkHref="#sa455f754" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#sccbc82c5" transform="rotate(72)" />
      <use xlinkHref="#sccbc82c5" transform="rotate(144)" />
      <use xlinkHref="#sccbc82c5" transform="rotate(216)" />
      <use xlinkHref="#sccbc82c5" transform="rotate(288)" />
    </g>
  </svg>
);

export default FlagCm;
