import React from 'react';

const FlagSn = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 900 600" {...props}>
    <path fill="#00853f" d="M0 0h300v600H0z" />
    <path fill="#fdef42" d="M300 0h300v600H300z" />
    <path fill="#e31b23" d="M600 0h300v600H600z" />
    <g transform="translate(450 300)" fill="#00853f">
      <g id="s0ba0da37">
        <path id="sdc6318e3" d="M0-100V0h50z" transform="rotate(18 0 -100)" />
        <use xlinkHref="#sdc6318e3" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#s0ba0da37" transform="rotate(72)" />
      <use xlinkHref="#s0ba0da37" transform="rotate(144)" />
      <use xlinkHref="#s0ba0da37" transform="rotate(216)" />
      <use xlinkHref="#s0ba0da37" transform="rotate(288)" />
    </g>
  </svg>
);

export default FlagSn;
