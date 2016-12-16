import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Cell } from '../../layout';
import { Ico } from '../../ui_elements/';
import { keys, pick, omit } from 'lodash';
import cx from 'classnames';

const IconButton = props => {
  const { className } = props;
  const iconPropKeys = keys(Ico.propTypes);
  const iconProps = pick(props, iconPropKeys);
  const rest = omit(props, iconPropKeys);

  return (
    <Cell className={cx('art-icon-button', className)} role="button" {...rest}>
      <Ico {...iconProps} />
    </Cell>
  );
};

export default IconButton;
