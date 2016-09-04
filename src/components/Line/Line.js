import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './Line.scss';

export default class Line extends Component {

  static propTypes = {
    className: PropTypes.string,
    grow: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    grow: false,
  };

  render() {
    const { className, children, grow, ...rest } = this.props;

    const conf = cx({
      grow
    });

    return (
      <div className={cx('box line', conf, className, styles.Box)} {...rest}>
        {children}
      </div>
    );
  }
}
