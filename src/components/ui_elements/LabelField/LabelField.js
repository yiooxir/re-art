import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import cx from 'classnames';
import { Row, Col } from '../../layout';

const LabelField = props => {
  const { className, children, ...rest } = props;

  const customRender = ({label, value}) => {
    return (
      <Col>
        <label>{label}</label>
        <p>{value}</p>
      </Col>
    )
  };

  const childrenRender = ({children}) => {
    return (
      <Col>
        {children}
      </Col>
    )
  };

  return (
    <Row content-col auto-height className={cx('art-label-field', className)} {...rest}>
      {children ? childrenRender(props) : customRender(props)}
    </Row>
  );
};

export default LabelField;