import React from 'react';

const FlagAu = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 10080 5040" {...props}>
    <defs>
      <clipPath id="sc631a2bd">
        <path d="M0 0v1.5h7V3H6zm6 0H3v3.5H0V3z" />
      </clipPath>
      <path
        id="s8c971e76"
        d="M0-360l69.421 215.845 212.038-80.301L155.99-35.603l194.985 115.71-225.881 19.651 31.105 224.59L0 160l-156.198 164.349 31.105-224.59-225.881-19.651 194.986-115.711-125.471-188.853 212.038 80.301z"
      />
      <path
        id="s26a4a7f2"
        d="M0-210L54.86-75.508l144.862 10.614L88.765 28.842l34.67 141.052L0 93.334l-123.435 76.56 34.67-141.052-110.957-93.736L-54.86-75.508z"
      />
      <use id="s495a8e3f" xlinkHref="#s8c971e76" transform="scale(2.1)" />
    </defs>
    <path fill="#00008b" d="M0 0h10080v5040H0z" />
    <path d="M0 0l5040 2520m0-2520L0 2520" stroke="#fff" strokeWidth={504} />
    <path d="M0 0l6 3m0-3L0 3" stroke="red" strokeWidth={0.4} clipPath="url(#sc631a2bd)" transform="scale(840)" />
    <path d="M2520 0v2940M0 1260h5880" stroke="#fff" strokeWidth={840} />
    <path d="M2520 0v2940M0 1260h5880" stroke="red" strokeWidth={504} />
    <path d="M0 2520h5040V0h1680v3360H0z" fill="#00008b" />
    <g fill="#fff">
      <use xlinkHref="#s495a8e3f" x={2520} y={3780} />
      <use xlinkHref="#s8c971e76" x={7560} y={4200} />
      <use xlinkHref="#s8c971e76" x={6300} y={2205} />
      <use xlinkHref="#s8c971e76" x={7560} y={840} />
      <use xlinkHref="#s8c971e76" x={8680} y={1869} />
      <use xlinkHref="#s26a4a7f2" x={8064} y={2730} />
    </g>
  </svg>
);

export default FlagAu;
