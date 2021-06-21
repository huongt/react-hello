import React, { Component } from 'react';
import FormatDataFlow from './FormatDataFlow';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        {/* this is call the data flows down - transfer state from parent to child. 
        But the child doesn't need to know its props from the parent's props or state */}
        <FormatDataFlow date={this.state.date}/> 
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
