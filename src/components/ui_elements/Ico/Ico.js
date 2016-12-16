import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Awesome from 'react-fontawesome';
import { omit } from 'lodash';
import 'font-awesome/css/font-awesome.css'

/**
 * Wrapper for awesome component <@react-fontawesome|https://github.com/danawoodman/react-fontawesome>
 * @param props {Object} - see react-awesome API
 * @returns {XML}
 * @constructor
 */
const Ico = props => {
  return <Awesome {...props} />;
};

Ico.propTypes = {
  name: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  fixedWidth: PropTypes.bool,
  flip: PropTypes.bool,
  inverse: PropTypes.bool,
  pulse: PropTypes.bool,
  rotate: PropTypes.number,
  size: PropTypes.string,
  spin: PropTypes.bool,
  stack: PropTypes.string,
  tag: PropTypes.string,
};

export default Ico;
