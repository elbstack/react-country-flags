import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import flags from '../../flags/react';

const fetchFlag = async country => {
  if (!flags[country]) return Promise.resolve(null);
  const { default: data } = await flags[country]();
  return data;
};

export const countries = (() => Object.keys(flags))();

export default class Flags extends Component {
  state = {
    flag: null,
  };

  static defaultProps = {
    country: null,
    asSquare: false,
  };

  componentDidMount() {
    this.updateFlag();
  }

  componentDidUpdate(prevProps) {
    const { country } = this.props;

    if (country !== prevProps.country) {
      this.updateFlag();
    }
  }

  async updateFlag() {
    const { country } = this.props;
    const flag = await fetchFlag(country);
    this.setState({ flag });
  }

  render() {
    const { asSquare } = this.props;
    const { flag } = this.state;
    if (!flag) return null;
    if (!asSquare) return createElement(flag);
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        {createElement(flag)}
      </svg>
    );
  }
}

Flags.propTypes = {
  country: PropTypes.string,
  asSquare: PropTypes.bool,
};
