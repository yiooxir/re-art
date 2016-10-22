import { PropTypes } from 'react';
import cx from 'classnames';
import { keys, pick, omit } from 'lodash';

export const assetProps = {
  auto: PropTypes.bool,
  'auto-width': PropTypes.bool,
  'auto-height': PropTypes.bool,
  'content-col': PropTypes.bool,
  'content-row': PropTypes.bool,
  disabled: PropTypes.bool,
  grid: PropTypes.number,
  type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'link']),
  align: PropTypes.string,
};

export function getAssetClasses(props) {
  const compose = pick(props, keys(assetProps));
  const cleanCompose = omit(compose, ['grid', 'type', 'align']);
  const align = (compose.align || '').split(':') || [];

  return cx( cleanCompose, {
    [`grid-${compose.grid}`]: compose.grid,
    [`vertical-align-${align[0]}`]: align[0],
    [`horizontal-align-${align[1]}`]: align[1],
    [props.type]: !!compose.type,

  });
}

export function splitProps(props) {
  return {
    classes: getAssetClasses(props),
    rest: omit(props, keys(assetProps))
  };
}
