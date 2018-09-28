import React from 'react';

const FlagCk = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 300" {...props}>
    <clipPath id="s85203e2b">
      <path d="M0 0v75h350v75h-50zm300 0H150v200H0v-50z" />
    </clipPath>
    <path fill="#00247d" d="M0 0h600v300H0z" />
    <path d="M0 0l300 150m0-150L0 150" stroke="#fff" strokeWidth={30} />
    <path d="M0 0l300 150m0-150L0 150" stroke="#cf142b" strokeWidth={20} clipPath="url(#s85203e2b)" />
    <path d="M150 0v200M0 75h350" stroke="#fff" strokeWidth={50} />
    <path d="M150 0v200M0 75h350" stroke="#cf142b" strokeWidth={30} />
    <path d="M300 0v150H0v150h600V0z" fill="#00247d" />
    <g transform="translate(450 150)">
      <g id="s49ffa104" transform="translate(0 -102)" fill="#fff">
        <g id="s39779b07">
          <path id="sc43daf61" d="M0-22.5V0h12" transform="rotate(18 0 -22.5)" />
          <use xlinkHref="#sc43daf61" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#s39779b07" transform="rotate(72)" />
        <use xlinkHref="#s39779b07" transform="rotate(144)" />
        <use xlinkHref="#s39779b07" transform="rotate(216)" />
        <use xlinkHref="#s39779b07" transform="rotate(288)" />
      </g>
      <g id="s78382fbe">
        <use xlinkHref="#s49ffa104" transform="rotate(24)" />
        <use xlinkHref="#s49ffa104" transform="rotate(48)" />
        <use xlinkHref="#s49ffa104" transform="rotate(72)" />
        <use xlinkHref="#s49ffa104" transform="rotate(96)" />
        <use xlinkHref="#s49ffa104" transform="rotate(120)" />
        <use xlinkHref="#s49ffa104" transform="rotate(144)" />
        <use xlinkHref="#s49ffa104" transform="rotate(168)" />
      </g>
      <use xlinkHref="#s78382fbe" transform="rotate(168)" />
    </g>
  </svg>
);

export default FlagCk;
