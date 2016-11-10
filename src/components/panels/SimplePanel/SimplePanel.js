import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Content, Cell } from '../../layout';
import cx from 'classnames';

const SimplePanel = props => {
  // const assets = splitProps(props);
  const { className, children, ...rest } = props;

  return (
    <Cell {...rest} className={cx('art-simple-panel', className)} >
      <Content auto >
        {children}
      </Content>
    </Cell>
  );
};

export default SimplePanel;