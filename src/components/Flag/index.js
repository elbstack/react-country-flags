import React, { PureComponent as Component, createElement } from 'react';
import PropTypes from 'prop-types';
import flags from '../../flags/react';

const fetchFlag = async country => {
  if (!flags[country]) return Promise.resolve(null);
  const { default: data } = await flags[country]();
  return data;
};

// thanks to https://github.com/facebook/react/issues/5465#issuecomment-157888325
const makeCancelable = promise => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
      error => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

export const countries = (() => Object.keys(flags))();

export default class Flags extends Component {
  cancelUpdate = () => {};

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
    this.cancelUpdate();
  }

  updateFlag() {
    const { country } = this.props;
    const { promise, cancel } = makeCancelable(fetchFlag(country));
    promise.then(flag => {
      this.setState({ flag });
    });
    this.cancelUpdate = cancel;
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
