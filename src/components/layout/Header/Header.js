import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import cx from 'classnames';
import Cell from '../Cell';
// import { assetProps, splitProps } from '../../assets';

const Header = props => {
  // const assets = splitProps(props);
  const { className, children, ...rest } = props;

  return (
    <Cell auto-width className={cx('art-header', className)} {...rest}>
      {children}
    </Cell>
  );
};

export default Header;
