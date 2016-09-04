import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import styles from './Box.scss';

export default class Box extends Component {

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
      <div className={cx('box row', conf, className, styles.Box)} {...rest}>
        {children}
      </div>
    );
  }
}
