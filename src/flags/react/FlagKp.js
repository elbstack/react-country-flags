import React from 'react';

const FlagKp = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 36" {...props}>
    <path fill="#024FA2" d="M0 0h72v36H0z" />
    <path fill="#fff" d="M0 6h72v24H0z" />
    <path fill="#ED1C27" d="M0 7h72v22H0z" />
    <circle fill="#fff" cx={24} cy={18} r={8} />
    <g transform="matrix(7.75 0 0 7.75 24 18)" fill="#ED1C27">
      <g id="s0f34304b">
        <path id="s535ea555" transform="rotate(18 3.157 -.5)" d="M0 0v1h.5z" />
        <use xlinkHref="#s535ea555" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#s0f34304b" transform="rotate(72)" />
      <use xlinkHref="#s0f34304b" transform="rotate(-72)" />
      <use xlinkHref="#s0f34304b" transform="rotate(144)" />
      <use xlinkHref="#s0f34304b" transform="rotate(-144)" />
    </g>
  </svg>
);

export default FlagKp;
