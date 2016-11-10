import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import cx from 'classnames';
import { assetProps, splitProps } from '../../assets';
import styles from './Cell.scss';

const Cell = props => {
  const assets = splitProps(props);
  const { className, children, ...rest } = assets.rest;
  return (
    <div className={cx('cell content-col', assets.classes, className, styles.Box)} {...rest}>
      {children}
    </div>
  );
};

Cell.propTypes = assetProps;

Cell.defaultProps = {};

export default Cell;
