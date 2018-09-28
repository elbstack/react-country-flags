import React from 'react';

const FlagHn = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 36" {...props}>
    <path fill="#0073cf" d="M0 0h72v36H0z" />
    <path fill="#fff" d="M0 12h72v12H0z" />
    <g id="se30fab8f" transform="matrix(2 0 0 2 36 18)" fill="#0073cf">
      <g id="s1efae5c5">
        <path id="s0725a184" transform="rotate(18 3.157 -.5)" d="M0 0v1h.5z" />
        <use xlinkHref="#s0725a184" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#s1efae5c5" transform="rotate(72)" />
      <use xlinkHref="#s1efae5c5" transform="rotate(-72)" />
      <use xlinkHref="#s1efae5c5" transform="rotate(144)" />
      <use xlinkHref="#s1efae5c5" transform="rotate(-144)" />
    </g>
    <use xlinkHref="#se30fab8f" transform="translate(10 -3.2)" />
    <use xlinkHref="#se30fab8f" transform="translate(10 2.8)" />
    <use xlinkHref="#se30fab8f" transform="translate(-10 -3.2)" />
    <use xlinkHref="#se30fab8f" transform="translate(-10 2.8)" />
  </svg>
);

export default FlagHn;
