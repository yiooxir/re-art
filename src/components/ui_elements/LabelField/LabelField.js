import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import cx from 'classnames';
import { Row, Col } from 'components/layout';

const LabelField = props => {
  const { className, children, label, text, ...rest } = props;

  const customRender = ({label, text}) => {
    return (
      <Col>
        <label>{label}</label>
        <p>{text}</p>
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