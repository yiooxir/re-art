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

export default Ico;
