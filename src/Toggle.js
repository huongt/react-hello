import React, { Component } from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleClick1 = () => {
    console.log('this is: ', this);
    // in the render() will be like this: 
    return <button onClick={this.handleClick1}>Click me</button>
  }

  handleClick2() {
    console.log('this is: ', this);
    // in the render() will be like this: 
    // but this will lead to some wrong behavior when loading if the parent transfer props to the child by using this way
    return <button onClick={() => this.handleClick2()}>Click me</button>
  }

  Form() {
    function handleSubmit(e) {
      // reactjs doesn't use return false, but using e.preventDefault instead
      e.preventDefault(); // this is equal to return false in javascript function
      console.log('You clicked submit');
    }
    // return
    // (<form onSubmit="console.log('You clicked submit.'); return false">
    //   <button type="submit">Submit</button>
    // </form>);
    {/* equal to this one */ }
    return
    (<form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
