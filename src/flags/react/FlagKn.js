import React from 'react';

const FlagKn = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 750 500" {...props}>
    <svg viewBox="0 0 750 500">
      <path d="M750 0H0v500" fill="#009e49" />
      <path d="M0 500h750V0" fill="#ce1126" />
      <path d="M0 500L750 0" stroke="#fcd116" strokeWidth={210} />
      <path d="M0 500L750 0" stroke="#000" strokeWidth={150} />
      <g id="sfc7af856" transform="rotate(-33.69 514.716 -777.095)" fill="#fff">
        <g id="s949522d6">
          <path id="s6930e572" d="M0-70V0h35" transform="rotate(18 0 -70)" />
          <use xlinkHref="#s6930e572" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#s949522d6" transform="rotate(72)" />
        <use xlinkHref="#s949522d6" transform="rotate(144)" />
        <use xlinkHref="#s949522d6" transform="rotate(216)" />
        <use xlinkHref="#s949522d6" transform="rotate(288)" />
      </g>
      <use xlinkHref="#sfc7af856" transform="translate(-285 190)" />
    </svg>
  </svg>
);

export default FlagKn;
