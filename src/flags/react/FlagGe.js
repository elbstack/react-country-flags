import React from 'react';

const FlagGe = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 200" {...props}>
    <defs>
      <g id="s04dc8ef0">
        <clipPath id="s28a96dfc">
          <path d="M-109 104a104 104 0 0 0 0-208h218a104 104 0 0 0 0 208z" />
        </clipPath>
        <path id="s68a700b4" d="M-55 74a55 55 0 0 1 110 0V-74a55 55 0 0 1-110 0z" clipPath="url(#s28a96dfc)" />
        <use xlinkHref="#s68a700b4" transform="rotate(90)" />
      </g>
    </defs>
    <path fill="#fff" d="M0 0h300v200H0z" />
    <path d="M130 0v80H0v40h130v80h40v-80h130V80H170V0h-40z" fill="red" />
    <use xlinkHref="#s04dc8ef0" transform="translate(64.45 39.45)" fill="red" />
    <use xlinkHref="#s04dc8ef0" transform="translate(235.55 160.55)" fill="red" />
    <use xlinkHref="#s04dc8ef0" transform="translate(235.55 39.45)" fill="red" />
    <use xlinkHref="#s04dc8ef0" transform="translate(64.45 160.55)" fill="red" />
  </svg>
);

export default FlagGe;
