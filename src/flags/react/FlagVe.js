import React from 'react';

const FlagVe = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 180 120" {...props}>
    <defs>
      <g id="s17194599" transform="translate(0 -36)">
        <g id="sb6cb2187">
          <g id="s70610266">
            <path d="M0-5v5h3z" fill="#fff" transform="rotate(18 0 -5)" id="sa8143e40" />
            <use xlinkHref="#sa8143e40" transform="scale(-1 1)" />
          </g>
          <use xlinkHref="#s70610266" transform="rotate(72)" />
        </g>
        <use xlinkHref="#s70610266" transform="rotate(-72)" />
        <use xlinkHref="#sb6cb2187" transform="rotate(144)" />
      </g>
    </defs>
    <path d="M0 0h180v120H0z" fill="#cf142b" />
    <path d="M0 0h180v80H0z" fill="#00247d" />
    <path d="M0 0h180v40H0z" fill="#fc0" />
    <g transform="translate(90 84)">
      <g id="s5e5470d0">
        <g id="sf6865a85">
          <use xlinkHref="#s17194599" transform="rotate(10)" />
          <use xlinkHref="#s17194599" transform="rotate(30)" />
        </g>
        <use xlinkHref="#sf6865a85" transform="rotate(40)" />
      </g>
      <use xlinkHref="#s5e5470d0" transform="rotate(-80)" />
    </g>
  </svg>
);

export default FlagVe;
