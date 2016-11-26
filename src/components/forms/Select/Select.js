import React, { Component, PropTypes } from 'react';
import { Box, Header, Col, Row, Content } from '../../layout';
import Input from '../Input';
import onClickOutSideListener from 'react-onclickoutside';
import { filter, isArray, isString, isFunction } from 'lodash';
import cx from 'classnames';

@onClickOutSideListener
export default class Select extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    search: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.func,
      PropTypes.bool,
    ]),

    /* Make component controllable. You should send @value in the props for to change this one. */
    onSelect: PropTypes.func,
  };

  static defaultProps = {
  };

  state = {
    DDVisible: false,
    value: this.props.value,
    options: []
  };

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value})
    }
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

  queryValues(value) {
    const { search, options: opt } = this.props;

    if (!search) return opt;
    let options;

    switch (true) {
    case search === true:
      options = filter(opt, e => e.value.toLowerCase().includes(value));
      break;

      // todo add search by bunch of object fields
    // case isArray(search):
    //   const q = search.reduce((obj, e) => {obj[e] = value}, {});
    //   options = filter(opt, q);
    //   break;

    case isString(search):
      options = filter(opt, e => e[search].toLowerCase().includes(value));
      break;

    case isFunction(search):
      options = search(value, opt);
      break;

    default:
      options = opt;
    }

    console.log('q options',options);
    return options;
  }

  getOptions = () => {
    const { search, options } = this.props;

    /*
    * If there is a search as the parameter it will be keeps and selected from inner state
    * */
    return search ? this.state.options : options;
  };

  onInputChange = (value) => {
    const options = this.queryValues(value);
    this.setState({value, options})
  };

  onOptionSelect = (option, event) => {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(option, event);
    } else {
      this.setState({value: option.value})
    }

    this.setDDVisibility(false);
  };

  render() {
    const { className, options } = this.props;
    const { DDVisible, value } = this.state;
    return (
      <Col className={cx(className, "art-select")} >
        <Row className="art-select-input" onClick={() => this.setDDVisibility(true)} >
          <Input value={value || ''} onChange={e => this.onInputChange(e.target.value)} />
        </Row>
        <Row className="art-select-dropdown-wrap" display={DDVisible}>
          <Row className="art-select-dropdown scrollable">
            <Content className="scrollable">
              {this.getOptions().map((option, i) => (
                <Row key={i} onClick={(e) => this.onOptionSelect(option, e)}>{option.value || '-'}</Row>
              ))}
            </Content>
          </Row>
        </Row>
      </Col>
    )
  }
}
