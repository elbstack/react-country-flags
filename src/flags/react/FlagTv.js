import React from 'react';

const FlagTv = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 600" {...props}>
    <defs>
      <clipPath id="sc2e6d055">
        <path d="M0 0v150h700v150H600zm0 300v100h300V0h300z" />
      </clipPath>
      <path id="s28337b13" fill="#ffce00" d="M0-50.08l29.437 90.596-77.067-55.992h95.26l-77.067 55.993z" />
      <use id="se6d353a4" xlinkHref="#s28337b13" transform="rotate(36)" />
    </defs>
    <path fill="#00247d" d="M0 0h1200v600H0z" />
    <path d="M0 0l600 300M0 300L600 0" stroke="#fff" strokeWidth={60} />
    <path d="M0 0l600 300M0 300L600 0" stroke="#cf142b" strokeWidth={40} clipPath="url(#sc2e6d055)" />
    <path d="M300 0v400M0 150h700" stroke="#fff" strokeWidth={100} />
    <path d="M300 0v400M0 150h700" stroke="#cf142b" strokeWidth={60} />
    <path d="M0 300h600V0h600v600H0z" fill="#5b97b1" />
    <use xlinkHref="#s28337b13" x={645.34} y={540.994} />
    <use xlinkHref="#se6d353a4" x={788.026} y={504.516} />
    <use xlinkHref="#se6d353a4" x={788.026} y={382.532} />
    <use xlinkHref="#se6d353a4" x={914.03} y={473.684} />
    <use xlinkHref="#se6d353a4" x={914.03} y={208.271} />
    <use xlinkHref="#s28337b13" x={996.442} y={390.046} />
    <use xlinkHref="#se6d353a4" x={1019.928} y={172.078} />
    <use xlinkHref="#s28337b13" x={1102.836} y={321.554} />
    <use xlinkHref="#s28337b13" x={1102.836} y={87.486} />
  </svg>
);

export default FlagTv;
