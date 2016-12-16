import React, { Component, PropTypes } from 'react';
import { Box, Header, Col, Row, Content } from '../../layout';
import Input from '../Input';
import onClickOutSideListener from 'react-onclickoutside';
import { filter, isArray, isString, isFunction } from 'lodash';
import cx from 'classnames';

/* todo: Input should get the focus after option's been selected
* todo: Add arrow management
* todo: Add clear icon & icon of drop down
* todo: fix css: green border disappears if we click on the dropdown window
* todo: Add notice 'Not found' if selection list is empty
* */

@onClickOutSideListener
export default class Select extends Component {

  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.array.isRequired,
    searchable: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.func,
      PropTypes.bool,
    ]),

    /* Make component controllable. You should send @value in the props for to change this one. */
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    onSelect: () => {}
  };

  state = {
    DDVisible: false,
    value: this.props.value || '',
    options: this.props.options || []
  };

  componentWillMount() {
    this.mounted = true;
    this.valueHasBeenChanged = false;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state;

    this.setState({
      options: nextProps.options,
      value: this.valueHasBeenChanged ? value : nextProps.value
    });
  }

  setState(params) {
    this.mounted && super.setState(params)
  }

  setDDVisibility(open) {
    this.setState({DDVisible: open})
  }

  handleClickOutside() {
    this.setDDVisibility(false);
  }

  selectOptions(value) {
    const { searchable, options: opt } = this.props;

    if (!searchable || !value) return opt;
    let options;

    if (!isArray(opt)) {
      console.warn('Select Error: Options should be an Array type');
    }

    switch (true) {
    case searchable === true:
      options = filter(opt, e => e.value.toLowerCase().includes(value));
      break;

      // todo add search by bunch of object fields
    // case isArray(searchable):
    //   const q = searchable.reduce((obj, e) => {obj[e] = value}, {});
    //   options = filter(opt, q);
    //   break;

    case isString(searchable):
      options = filter(opt, e => e[searchable].toLowerCase().includes(value));
      break;

    case isFunction(searchable):
      options = searchable(value, opt);
      if (!isArray(options)) {
        console.warn('Select Error: Search function should return an Array');
        options = [];
      }
      break;

    default:
      options = opt;
    }

    return options;
  }

  onInputChange = (value) => {
    this.setState({ value });
    this.valueHasBeenChanged = true;
  };

  onOptionSelect = (option, event) => {
    const { onSelect } = this.props;

    this.onInputChange(option.value);
    // onSelect(option, event);
    // this.setState({value: option.value, valueHasBeenChanged: true});
    // console.log('onOptionSelect: option.value', option.value);
    setTimeout(() => onSelect(option, event), 0);
    this.setDDVisibility(false);
  };

  render() {
    const { className, options, value: _value, searchable, enableOnClickOutside, disableOnClickOutside, ...rest } = this.props;
    const { DDVisible, value } = this.state;

    return (
      <Col className={cx(className, "art-select")} {...rest} >
        <Row className="art-select-input" onClick={() => this.setDDVisibility(true)} >
          <Input value={value || ''} onChange={e => this.onInputChange(e.target.value)} />
        </Row>
        <Row className="art-select-dropdown-wrap" display={DDVisible}>
          <Row className="art-select-dropdown scrollable">
            <Content className="scrollable">
              {this.selectOptions(value).map((option, i) => (
                <Row key={i} onClick={(e) => this.onOptionSelect(option, e)}>{option.value || '-'}</Row>
              ))}
            </Content>
          </Row>
        </Row>
      </Col>
    )
  }
}
