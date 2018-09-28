import React from 'react';

const FlagUz = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 250" {...props}>
    <path fill="#1eb53a" d="M0 0h500v250H0z" />
    <path fill="#0099b5" d="M0 0h500v125H0z" />
    <path fill="#ce1126" d="M0 80h500v90H0z" />
    <path fill="#fff" d="M0 85h500v80H0z" />
    <circle cx={70} cy={40} r={30} fill="#fff" />
    <circle cx={80} cy={40} r={30} fill="#0099b5" />
    <g fill="#fff" transform="translate(136 64)">
      <g id="s81505487">
        <g id="s0cdc4632">
          <g id="se3b5ffcb">
            <g id="saa261654">
              <path id="sab6fe2ef" d="M0-6v6h3" transform="rotate(18 0 -6)" />
              <use xlinkHref="#sab6fe2ef" transform="scale(-1 1)" />
            </g>
            <use xlinkHref="#saa261654" transform="rotate(72)" />
          </g>
          <use xlinkHref="#saa261654" transform="rotate(-72)" />
          <use xlinkHref="#se3b5ffcb" transform="rotate(144)" />
        </g>
        <use xlinkHref="#s0cdc4632" y={-24} />
        <use xlinkHref="#s0cdc4632" y={-48} />
      </g>
      <use xlinkHref="#s81505487" x={24} />
      <use xlinkHref="#s81505487" x={48} />
      <use xlinkHref="#s0cdc4632" x={-48} />
      <use xlinkHref="#s0cdc4632" x={-24} />
      <use xlinkHref="#s0cdc4632" x={-24} y={-24} />
    </g>
  </svg>
);

export default FlagUz;
