// require('font-awesome/css/font-awesome.css');
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Cell, Col, Row, Box, Header, Content } from './components/layout';
import { Input, Select } from './components/forms';
import { Button } from 'components/buttons';
import { LabelField, Ico } from 'components/ui_elements';
import { SimplePanel, GroupPanel } from 'components/panels';

import './App.scss';
import './styles/style.scss';

export default class App extends Component {
  render() {
    return (
      <div className="layer content-col">
        <Header>hello</Header>
        <Box>
          <Col grid={2}>
            sidebar
          </Col>
          <Col grid={10} style={{background: '#f3f3f4'}}>
            <Row>
              <SimplePanel grid={4}>
                <Header><h3>Количество сделок</h3></Header>
                <Content>
                  <h3>Управление сделками: <small>итог здесь</small></h3>
                  <label>Имя:</label>
                  <Input/>
                  <label>Имя:</label>
                  <Input/>
                  <label>Селект:</label>
                  <Select
                    value="first"
                    search
                    options={[
                      {value: 'select1'}, {value: 'select2'}
                    ]}
                  />

                  <label>Имя:</label>
                  <Input/>

                  <Col grid={5}>
                    <LabelField label="Описание:" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                    <LabelField label="Котрибьютер" text={<a href="/">asdfasdf</a>} />
                    <LabelField label="Котрибьютер" text={<a href="/">asdfasdf</a>} />
                    123
                    <Ico name="bath" size="2x"/>

                    <LabelField>
                      <label htmlFor="1">
                        Терминал:
                      </label>
                      <span>Провайдер <a href="/">Альпари</a></span>
                    </LabelField>
                  </Col>

                  <Row align=":right">
                    <Button grid={4} type="primary" disabled>OK</Button>
                  </Row>

                </Content>
              </SimplePanel>

              <SimplePanel grid={8}>
                <Header><h3>Количество сделок </h3> <span>(Всего 3штю)</span> </Header>
                <Content>
                  <label disabled>Имя:</label>
                  <Input disabled />
                  <label>Имя:</label>
                  <Input/>
                  <label>Имя:</label>
                  <Input/>
                </Content>
              </SimplePanel>
            </Row>

            <Row>
              <SimplePanel grid={10}>
                <Header><h3>Количество сделок </h3></Header>
                <Content>
                  <h1>Заголовок 1 <small>подзаголовок подзаголовок</small></h1>
                  <h2>Заголовок 2 <small>подзаголовок</small></h2>
                  <h3>Заголовок 3 <small>подзаголовок</small></h3>
                  <h4>Заголовок 4 <small>подзаголовок</small></h4>
                  <h5>Заголовок 5 <small>подзаголовок</small></h5>
                  <p>текст</p> текст
                </Content>
                <GroupPanel grid={5}>
                  <Button type="primary">1</Button>
                  <Button type="primary">OK</Button>
                </GroupPanel>

              </SimplePanel>
            </Row>


            <Col align="around:center" grid={4} style={{height: '50px', color: 'white', background: 'red'}}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </Col>

          </Col>
        </Box>

{/*
        <Cell content-col grid={2} auto style={{ border: '2px solid' }}>
          <Cell content-row auto-width>test <div>ttt</div></Cell>
          <span className="test">123</span>
          <span className="test">123</span>
          <span className="test">123</span>
          <label>Input text</label>
          <Input placeholder="input text" />
          <h1>hello</h1>
          <h2>hello</h2>
          <h3>hello</h3>
          <span>Lorem ipsum eget urna mollis ornare vel eu leo. Cum sociisnatoque penatibus et magnis dis parturient montes, code nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed euismod aliquet sapien consequat tincidunt.</span>
        </Cell>
        <Cell content-row auto style={{ border: '2px solid' }}>
          <span className="test grid-2">123</span>
          <span className="test grid-2">123</span>
          <span className="test">123</span>
          <Cell content-col grid={5} auto-height>hey hey</Cell>
        </Cell>
*/}

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
