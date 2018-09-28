import React from 'react';

const FlagGg = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-18 -12 36 24" {...props}>
    <path fill="#fff" d="M-18-12h36v24h-36z" />
    <path d="M0-12v24M-18 0h36" stroke="#e8112d" strokeWidth={6} fill="none" />
    <path id="sef8202b9" d="M-9 2l1-1h9v-2h-9l-1-1z" fill="#f9dd16" />
    <use xlinkHref="#sef8202b9" transform="rotate(90)" />
    <use xlinkHref="#sef8202b9" transform="rotate(-90)" />
    <use xlinkHref="#sef8202b9" transform="rotate(180)" />
  </svg>
);

export default FlagGg;
