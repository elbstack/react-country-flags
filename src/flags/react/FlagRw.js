import React from 'react';

const FlagRw = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 720" {...props}>
    <path fill="#20603D" d="M0 0h1080v720H0z" />
    <path fill="#FAD201" d="M0 0h1080v540H0z" />
    <path fill="#00A1DE" d="M0 0h1080v360H0z" />
    <g transform="translate(886.5 188.1)">
      <g id="s2e214cd1">
        <path
          id="s3461dff5"
          fill="#E5BE01"
          d="M116.1 0L35.692 4.699l76.452 25.35L33.26 13.777l67.286 44.273L28.56 21.915l53.534 60.18-60.18-53.534 36.135 71.985L13.777 33.26l16.272 78.884-25.35-76.452L0 116.1-1-1z"
        />
        <use xlinkHref="#s3461dff5" transform="scale(1 -1)" />
      </g>
      <use xlinkHref="#s2e214cd1" transform="scale(-1 1)" />
      <circle r={34.3} fill="#E5BE01" stroke="#00A1DE" strokeWidth={3.4} />
    </g>
  </svg>
);

export default FlagRw;
