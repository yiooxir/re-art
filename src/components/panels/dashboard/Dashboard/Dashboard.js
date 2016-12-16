import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Col } from '../../../layout';
import cx from 'classnames';

const Dashboard = props => {
  const { className, children, ...rest } = props;

  return (
    <Col {...rest} className={cx('art-dashboard', className)} >
      {children}
    </Col>
  );
};

export default Dashboard;
