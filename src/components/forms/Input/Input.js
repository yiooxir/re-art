import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    status: PropTypes.oneOf(['success', 'error', 'info']),
  };

  render() {
    const { className, status, ...rest } = this.props;
    return (
      <input
        className={cx('art-input art-form-control', className, {status})}
        ref={input => this.value = input && input.value}
        autoCapitalize="off"
        autoCorrect="off"
        {...rest}
      />
    );
  }
}
