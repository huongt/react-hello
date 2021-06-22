import React, { Component } from 'react';

export default class ListAndKeys extends Component {
  constructor(props) {
    super(props);
    const numbers = [1, 2, 3, 4, 5];
    const double = numbers.map((number) => number * 2);
    const listItems = numbers.map((number) =>
      <li>{number}</li>);

  }

  NumberList(props) {
    const numbers = props.numbers;
    const listNumbers = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>);
    return (<ul>{listNumbers}</ul>);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
