import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { IconField } from '../../../ui_elements';
import cx from 'classnames';

const MenuItem = ({className, ...rest}) => (
  <IconField {...rest} className={cx('art-menu-item', className)} />
);

MenuItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
};

export default MenuItem;
