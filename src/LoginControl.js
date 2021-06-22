import React, { Component } from 'react';

export default class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
    const messages = ['React', 'Re: React', 'Re:Re: React'];
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  LoginButton(props) {
    return (
      <button onClick={props.onclick}>
        Login
      </button>
    );
  }

  LogoutButton(props) {
    return (
      <button onClick={props.onclick}>
        Logout
      </button>
    );
  }

  Greeting(props) {
    return (
      <div>hello </div>
    );
  }

  MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello</h1>
        {unreadMessages.length > 0 &&
          <h2>You have {unreadMessages.length} unread messages</h2>}
      </div>
    );
  }

  // <MailBox unreadMessages={this.messages}/>

  // Preventing Component from Rendering

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <this.LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <this.LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <this.Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  
  WarningBanner(props) {
    if (!props.warn) { return null; }
    return (
      <div className="warning">Warning!</div>
    );
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <this.WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}