import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import flags from '../../flags/react';

export const countries = (() => Object.keys(flags))();

const Flag = ({ country, ...props }) =>
  flags[country] ? <Suspense fallback={null}>{createElement(lazy(flags[country], props))}</Suspense> : null;

export default function Flags({ asSquare, country, ...props }) {
  if (!asSquare) return <Flag {...props} country={country} />;
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...props}>
      <Flag country={country} />
    </svg>
  );
}

Flags.defaultProps = {
  country: null,
  asSquare: false,
};

Flags.propTypes = {
  country: PropTypes.string,
  asSquare: PropTypes.bool,
};
