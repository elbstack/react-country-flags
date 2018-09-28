import React from 'react';

const FlagFm = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-19 -10 38 20" {...props}>
    <path fill="#75b2dd" d="M-19-10h38v20h-38z" />
    <g id="s17ec4d17" transform="translate(0 -6)" fill="#fff">
      <g id="sf00899f4">
        <path id="s0cf11e6f" d="M0-2v2h1" transform="rotate(18 0 -2)" />
        <use xlinkHref="#s0cf11e6f" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#sf00899f4" transform="rotate(72)" />
      <use xlinkHref="#sf00899f4" transform="rotate(144)" />
      <use xlinkHref="#sf00899f4" transform="rotate(216)" />
      <use xlinkHref="#sf00899f4" transform="rotate(288)" />
    </g>
    <use xlinkHref="#s17ec4d17" transform="rotate(90)" />
    <use xlinkHref="#s17ec4d17" transform="rotate(180)" />
    <use xlinkHref="#s17ec4d17" transform="rotate(270)" />
  </svg>
);

export default FlagFm;
