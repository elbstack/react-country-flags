import React from 'react';

const FlagNu = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 120 60" {...props}>
    <svg viewBox="2 3 120 60">
      <defs>
        <path id="s052d0373" d="M0 0v15h70v15H60L0 0zm0 30v10h30V0h30L0 30z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#002868" fillRule="nonzero" d="M2 3h120v60H2z" />
        <path fill="#000" fillRule="nonzero" stroke="#FFF" strokeWidth={6} d="M2 3l60 30m0-30L2 33" />
        <g transform="translate(2 3)">
          <mask id="s4f4529e2" fill="#fff">
            <use xlinkHref="#s052d0373" />
          </mask>
          <path
            fill="#000"
            fillRule="nonzero"
            stroke="#CF142B"
            strokeWidth={4}
            d="M0 0l60 30m0-30L0 30"
            mask="url(#b)"
          />
        </g>
        <path fill="#000" fillRule="nonzero" stroke="#FFF" strokeWidth={10} d="M32 3v40M2 18h70" />
        <path fill="#000" fillRule="nonzero" stroke="#CF142B" strokeWidth={6} d="M32 3v40M2 18h70" />
        <path fill="#FCD116" fillRule="nonzero" d="M62 3h60v60H2V33h60z" />
        <g fillRule="nonzero" transform="translate(11 5)">
          <circle cx={21} cy={13} r={5.104} fill="#002868" />
          <path
            fill="#FCD116"
            d="M21 7.896l3 9.233-7.854-5.706h9.708L18 17.129M20.853.29l1.764 5.427L18 2.363h5.706L19.09 5.717m19.413 4.573l1.763 5.427-4.616-3.354h5.706l-4.616 3.354M21 20.29l1.763 5.427-4.616-3.354h5.706l-4.616 3.354M3.5 10.29l1.763 5.427-4.616-3.354h5.706l-4.616 3.354"
          />
        </g>
      </g>
    </svg>
  </svg>
);

export default FlagNu;
