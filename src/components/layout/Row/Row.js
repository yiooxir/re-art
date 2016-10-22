import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import cx from 'classnames';
import Cell from '../Cell';
// import { assetProps, splitProps } from '../../assets';

const Col = props => {
  // const assets = splitProps(props);
  const { className, children, ...rest } = props;

  return (
    <Cell content-row auto-width className={cx('art-row', className)} {...rest}>
      {children}
    </Cell>
  );
};

export default Col;
