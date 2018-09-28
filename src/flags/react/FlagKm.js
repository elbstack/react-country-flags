import React from 'react';

const FlagKm = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 300" {...props}>
    <path fill="#3A75C4" d="M0 0h500v300H0z" />
    <path fill="#CE1126" d="M0 0h500v225H0z" />
    <path fill="#FFF" d="M0 0h500v150H0z" />
    <path fill="#FFC61E" d="M0 0h500v75H0z" />
    <path fill="#3D8E33" d="M0 300l250-150L0 0v300z" />
    <circle fill="#FFF" cx={85} cy={150} r={67.5} />
    <circle fill="#3D8E33" cx={115} cy={150} r={67.5} />
    <path id="s639b734d" fill="#FFF" d="M100.01 89.2l7.36 22.588-19.258-13.949h23.776L92.63 111.788l7.38-22.588z" />
    <use xlinkHref="#s639b734d" y={32.208} />
    <use xlinkHref="#s639b734d" y={64.417} />
    <use xlinkHref="#s639b734d" y={96.625} />
  </svg>
);

export default FlagKm;
