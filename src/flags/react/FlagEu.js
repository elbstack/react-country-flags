import React from 'react';

const FlagEu = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 810 540" {...props}>
    <defs>
      <g id="s91bf8332">
        <g id="sf412d9e4">
          <path id="s0f53adc6" d="M0 0v1h.5z" transform="rotate(18 3.157 -.5)" />
          <use xlinkHref="#s0f53adc6" transform="scale(-1 1)" />
        </g>
        <g id="sa8efbd1a">
          <use xlinkHref="#sf412d9e4" transform="rotate(72)" />
          <use xlinkHref="#sf412d9e4" transform="rotate(144)" />
        </g>
        <use xlinkHref="#sa8efbd1a" transform="scale(-1 1)" />
      </g>
    </defs>
    <path fill="#039" d="M0 0h810v540H0z" />
    <g fill="#fc0" transform="matrix(30 0 0 30 405 270)">
      <use xlinkHref="#s91bf8332" y={-6} />
      <use xlinkHref="#s91bf8332" y={6} />
      <g id="s5cea22cb">
        <use xlinkHref="#s91bf8332" x={-6} />
        <use xlinkHref="#s91bf8332" transform="rotate(-144 -2.344 -2.11)" />
        <use xlinkHref="#s91bf8332" transform="rotate(144 -2.11 -2.344)" />
        <use xlinkHref="#s91bf8332" transform="rotate(72 -4.663 -2.076)" />
        <use xlinkHref="#s91bf8332" transform="rotate(72 -5.076 .534)" />
      </g>
      <use xlinkHref="#s5cea22cb" transform="scale(-1 1)" />
    </g>
  </svg>
);

export default FlagEu;
