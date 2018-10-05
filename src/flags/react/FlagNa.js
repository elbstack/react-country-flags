import React from 'react';

const FlagNa = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 60" {...props}>
    <svg viewBox="0 0 90 60">
      <path d="M90 0H0v60z" fill="#003580" />
      <path d="M0 60h90V0z" fill="#009543" />
      <path d="M0 60L90 0" stroke="#fff" strokeWidth={20} />
      <path d="M0 60L90 0" stroke="#d21034" strokeWidth={15} />
      <g fill="#ffce00" transform="translate(18 16.341)">
        <g id="s5c6eab9b">
          <path id="sb5936373" d="M0 10l1.553-4.204h-3.106z" />
          <use xlinkHref="#sb5936373" transform="rotate(90)" />
          <use xlinkHref="#sb5936373" transform="rotate(180)" />
          <use xlinkHref="#sb5936373" transform="rotate(270)" />
        </g>
        <use xlinkHref="#s5c6eab9b" transform="rotate(30)" />
        <use xlinkHref="#s5c6eab9b" transform="rotate(60)" />
        <circle r={5.5} stroke="#003580" />
      </g>
    </svg>
  </svg>
);

export default FlagNa;
