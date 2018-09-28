import React from 'react';

const FlagLr = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 209 110" {...props}>
    <path fill="#bf0a30" d="M0 0h209v110H0z" />
    <path d="M0 15h209M0 35h209M0 55h209M0 75h209M0 95h209" stroke="#fff" strokeWidth={10} />
    <path fill="#002868" d="M0 0h50v50H0z" />
    <g transform="matrix(15 0 0 15 25 25)">
      <g id="s5ef45845">
        <path id="s677b37c7" fill="#fff" transform="rotate(18 3.157 -.5)" d="M0 0v1h.5z" />
        <use xlinkHref="#s677b37c7" transform="scale(-1 1)" />
      </g>
      <use xlinkHref="#s5ef45845" transform="rotate(72)" />
      <use xlinkHref="#s5ef45845" transform="rotate(-72)" />
      <use xlinkHref="#s5ef45845" transform="rotate(144)" />
      <use xlinkHref="#s5ef45845" transform="rotate(-144)" />
    </g>
  </svg>
);

export default FlagLr;
