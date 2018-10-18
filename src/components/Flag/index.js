import React, { PureComponent as Component, createElement } from 'react';
import PropTypes from 'prop-types';
import flags from '../../flags/react';

const fetchFlag = async country => {
  if (!flags[country]) return Promise.resolve(null);
  const { default: data } = await flags[country]();
  return data;
};

export const countries = (() => Object.keys(flags))();

export default class Flags extends Component {
  isMounted = true;
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

  componentWillUnmount() {
    this.isMounted = false;
  }

  updateFlag() {
    const { country } = this.props;
    fetchFlag(country).then(flag => {
      if (this.isMounted) this.setState({ flag });
    });
  }

  render() {
    const { asSquare, country, ...props } = this.props;
    const { flag } = this.state;
    if (!flag && !asSquare) return null;
    if (!asSquare) return createElement(flag, props);
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" {...props}>
        {!flag ? null : createElement(flag)}
      </svg>
    );
  }
}

Flags.propTypes = {
  country: PropTypes.string,
  asSquare: PropTypes.bool,
};
