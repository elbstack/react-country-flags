import React from 'react';

const FlagBi = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 300" {...props}>
    <defs>
      <g id="se6fdf592" fill="#1eb53a">
        <g id="s0c0c4fed">
          <g id="sa8e2a64b">
            <g id="s25c8ce82">
              <path id="sc56da287" d="M0-20V0h20" transform="rotate(30 0 -20)" />
              <use xlinkHref="#sc56da287" transform="scale(-1 1)" />
            </g>
            <use xlinkHref="#s25c8ce82" transform="rotate(120)" />
            <use xlinkHref="#s25c8ce82" transform="rotate(240)" />
          </g>
          <use xlinkHref="#sa8e2a64b" transform="rotate(180)" />
        </g>
        <use xlinkHref="#s0c0c4fed" fill="#ce1126" transform="scale(.82)" />
      </g>
      <use id="se40402f7" xlinkHref="#se6fdf592" x={250} y={106} />
    </defs>
    <path d="M0 0h500L0 300h500z" fill="#ce1126" />
    <path d="M0 0v300L500 0v300z" fill="#1eb53a" />
    <path d="M0 0l500 300m0-300L0 300" stroke="#fff" strokeWidth={40} />
    <circle cx={250} cy={150} r={85} fill="#fff" />
    <use xlinkHref="#se40402f7" />
    <use xlinkHref="#se40402f7" transform="rotate(120 250 150)" />
    <use xlinkHref="#se40402f7" transform="rotate(240 250 150)" />
  </svg>
);

export default FlagBi;
