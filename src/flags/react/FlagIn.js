import React from 'react';

const FlagIn = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 225 150" {...props}>
    <path fill="#f93" d="M0 0h225v150H0z" />
    <path fill="#fff" d="M0 50h225v50H0z" />
    <path fill="#128807" d="M0 100h225v50H0z" />
    <g transform="translate(112.5 75)">
      <circle r={20} fill="#008" />
      <circle r={17.5} fill="#fff" />
      <circle r={3.5} fill="#008" />
      <g id="s802f1c83">
        <g id="sd204b3bc">
          <g id="s19e0389f">
            <g id="s3810a7b3" fill="#008">
              <circle r={0.875} transform="rotate(7.5 -8.75 133.5)" />
              <path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z" />
            </g>
            <use xlinkHref="#s3810a7b3" transform="rotate(15)" />
          </g>
          <use xlinkHref="#s19e0389f" transform="rotate(30)" />
        </g>
        <use xlinkHref="#sd204b3bc" transform="rotate(60)" />
      </g>
      <use xlinkHref="#s802f1c83" transform="rotate(120)" />
      <use xlinkHref="#s802f1c83" transform="rotate(-120)" />
    </g>
  </svg>
);

export default FlagIn;
