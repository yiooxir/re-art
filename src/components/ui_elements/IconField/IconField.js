import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Row } from '../../layout';
import Ico from '../Ico';
import cx from 'classnames';

const IconField = ({className, name, icon, ...rest}) => {
  return (
    <Row {...rest} className={cx('art-icon-field', className)} >
      { !!icon && (typeof icon === 'object' ? <Ico {...icon} /> : <Ico name={icon} />) }
      {name}
    </Row>
  );
};

IconField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

export default IconField;
