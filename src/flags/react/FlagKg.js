import React from 'react';

const FlagKg = props => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 250 150" {...props}>
    <clipPath id="s87332abe">
      <circle r={25} />
    </clipPath>
    <path fill="#e8112d" d="M0 0h250v150H0z" />
    <g transform="translate(125 75)">
      <g id="sa4828ec8" transform="scale(.25)">
        <g id="s3bcf823f">
          <path id="sf2d4085e" d="M-8.4 108C0 130-18 164 0 180c-6-24 14-50 8.4-72s-25.2-22-16.8 0z" fill="#ffef00" />
          <use xlinkHref="#sf2d4085e" transform="rotate(90)" />
          <use xlinkHref="#sf2d4085e" transform="rotate(180)" />
          <use xlinkHref="#sf2d4085e" transform="rotate(270)" />
        </g>
        <use xlinkHref="#s3bcf823f" transform="rotate(18)" />
        <use xlinkHref="#s3bcf823f" transform="rotate(36)" />
        <use xlinkHref="#s3bcf823f" transform="rotate(54)" />
        <use xlinkHref="#s3bcf823f" transform="rotate(72)" />
      </g>
      <use xlinkHref="#sa4828ec8" transform="rotate(9)" />
      <circle r={27} fill="#e8112d" />
      <circle cy={-1.5} r={22.5} fill="#ffef00" />
      <g id="s89fbd3d2" fill="#e8112d" clipPath="url(#s87332abe)">
        <path d="M-23.055 18a37.755 37.755 0 1 1 75.51 0h.305a36.26 36.26 0 1 0-72.52 0z" />
        <path d="M-17.601 18A35.301 35.301 0 1 1 53 18h.424a33.925 33.925 0 1 0-67.85 0z" />
        <path d="M20.7-15.052a33.052 33.052 0 1 0 0 66.104l1.8-1.232a31.82 31.82 0 1 1 0-63.64z" />
      </g>
      <use xlinkHref="#s89fbd3d2" transform="scale(-1 1)" />
    </g>
  </svg>
);

export default FlagKg;
