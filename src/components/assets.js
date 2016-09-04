import { PropTypes } from 'react';
import cx from 'classnames';
import { keys, pick, omit } from 'lodash';

export const assetProps = {
  auto: PropTypes.bool,
  'auto-width': PropTypes.bool,
  'auto-height': PropTypes.bool,
  'content-col': PropTypes.bool,
  'content-row': PropTypes.bool,
  grid: PropTypes.number,
};

export function getAssetClasses(props) {
  const compose = pick(props, keys(assetProps));

  return cx(compose, { [`grid-${compose.grid}`]: compose.grid });
}

export function splitProps(props) {
  return {
    classes: getAssetClasses(props),
    rest: omit(props, keys(assetProps))
  };
}
