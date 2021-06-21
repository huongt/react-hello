import React, { Component } from 'react';

export default class FormatDataFlow extends Component {
  render() {
    return (
      <div>
        <h2> it is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
