import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Cell, Header } from './components/layout';


import './App.scss';
import './styles/style.scss';

export default class App extends Component {
  render() {
    return (
      <div className="layer content-col">
        <Header>hello</Header>
        <Cell content-col grid={2} auto style={{ border: '2px solid' }}>
          <Cell content-row auto-width>test <div>ttt</div></Cell>
          <span className="test">123</span>
          <span className="test">123</span>
          <span className="test">123</span>
        </Cell>

        <Cell content-row auto style={{ border: '2px solid' }}>
          <span className="test grid-2">123</span>
          <span className="test grid-2">123</span>
          <span className="test">123</span>
          <Cell content-col grid={5} auto-height>hey hey</Cell>
        </Cell>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
