import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import cx from 'classnames';
import Cell from '../Cell';
// import { assetProps, splitProps } from '../../assets';

const Col = props => {
  // const assets = splitProps(props);
  const { className, children, ...rest } = props;

  return (
    <Cell content-col auto-height className={cx('art-col', className)} {...rest}>
      {children}
    </Cell>
  );
};

export default Col;
