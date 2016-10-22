import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import cx from 'classnames';
import Cell from '../Cell';

const Box = props => {
  // const assets = splitProps(props);
  const { className, children, ...rest } = props;

  return (
    <Cell content-row auto className={cx('art-box', className)} {...rest}>
      {children}
    </Cell>
  );
};

export default Box;
