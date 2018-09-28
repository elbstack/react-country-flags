import React from 'react';

const FlagCv = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 510 300" {...props}>
    <path fill="#003893" d="M0 0h510v300H0z" />
    <path fill="#fff" d="M0 150h510v75H0z" />
    <path fill="#cf2027" d="M0 175h510v25H0z" />
    <g fill="#f7d116" transform="translate(191.25 187.5)">
      <g id="sba450f61">
        <g id="safa48575" transform="translate(0 -75)">
          <g id="s84117a7b">
            <path id="s0088d7a7" d="M0-15V0h7.5" transform="rotate(18 0 -15)" />
            <use xlinkHref="#s0088d7a7" transform="scale(-1 1)" />
          </g>
          <use xlinkHref="#s84117a7b" transform="rotate(72)" />
          <use xlinkHref="#s84117a7b" transform="rotate(144)" />
          <use xlinkHref="#s84117a7b" transform="rotate(216)" />
          <use xlinkHref="#s84117a7b" transform="rotate(288)" />
        </g>
        <use xlinkHref="#safa48575" y={150} />
      </g>
      <use xlinkHref="#sba450f61" transform="rotate(72)" />
      <use xlinkHref="#sba450f61" transform="rotate(144)" />
      <use xlinkHref="#sba450f61" transform="rotate(216)" />
      <use xlinkHref="#sba450f61" transform="rotate(288)" />
    </g>
  </svg>
);

export default FlagCv;
