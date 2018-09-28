import React from 'react';

const FlagSy = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 180 120" {...props}>
    <path d="M0 0h180v120H0z" />
    <path fill="#fff" d="M0 0h180v80H0z" />
    <path fill="#ce1126" d="M0 0h180v40H0z" />
    <g id="s3f41d733" fill="#007a3d">
      <g id="see16fe3e">
        <g id="s2bec85f8">
          <path d="M54 47v13h8" transform="rotate(18 54 47)" id="s9ec60cac" />
          <use xlinkHref="#s9ec60cac" x={-108} transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#s2bec85f8" transform="rotate(72 54 60)" />
      </g>
      <use xlinkHref="#s2bec85f8" transform="rotate(-72 54 60)" />
      <use xlinkHref="#see16fe3e" transform="rotate(144 54 60)" />
    </g>
    <use xlinkHref="#s3f41d733" x={72} />
  </svg>
);

export default FlagSy;
