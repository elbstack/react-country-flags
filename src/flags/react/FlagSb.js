import React from 'react';

const FlagSb = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400" {...props}>
    <svg viewBox="0 0 800 400">
      <path d="M0 400V0h800z" fill="#0051ba" />
      <path d="M0 400h800V0z" fill="#215b33" />
      <path d="M0 400L800 0" stroke="#fcd116" strokeWidth={36} />
      <g transform="translate(140 120)">
        <g id="sa931cb16" fill="#fff">
          <g id="s0ff378c8">
            <g id="s7f7678ea">
              <path id="sd3ee06bb" d="M0-40V0h20z" transform="rotate(18 0 -40)" />
              <use xlinkHref="#sd3ee06bb" transform="scale(-1 1)" />
            </g>
            <use xlinkHref="#s7f7678ea" transform="rotate(72)" />
          </g>
          <use xlinkHref="#s7f7678ea" transform="rotate(-72)" />
          <use xlinkHref="#s0ff378c8" transform="rotate(144)" />
        </g>
        <g id="s9554276b" transform="rotate(40.6)">
          <use id="s89fe461e" xlinkHref="#sa931cb16" x={-104} transform="rotate(-40.6 -104 0)" />
          <use xlinkHref="#s89fe461e" x={208} />
        </g>
        <use xlinkHref="#s9554276b" transform="scale(-1 1)" />
      </g>
    </svg>
  </svg>
);

export default FlagSb;
