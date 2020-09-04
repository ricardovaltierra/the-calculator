import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const current = this.state;
    this.setState(
      calculate(current, name),
    );
  }

  render() {
    const { next, total } = this.state;
    return (
      <div id="app" className="flex-cont">
        <Display result={next || total || '0.0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
