import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Content, Cell, Row } from '../../layout';
import cx from 'classnames';

const GroupPanel = props => {
  const { className, children, padding, ...rest } = props;

  return (
    <Cell {...rest} content-row className={cx('art-padding-panel', className)} >
      {children}
    </Cell>
  );
};

export default GroupPanel;
