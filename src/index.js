import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';
import Toggle from './Toggle';

const name = "Joshua";
const user = {
  firstName: 'Harper',
  lastName: 'Perzed',
  avatarUrl: ''
};
const element =
  <div>
    <h1>hello {name} <br />
      Hello, {formatName(user)}
    </h1>
    <img src={user.avatarUrl}></img>
  </div>;

// JSX represents object
const elementObj = (
  <h1 className="greeting">Hello {name} </h1>
);
// above is equal to this one
const elementObj1 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello worl'
);
// elementObj1 is equal to this
const elementObj2 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello worl'
  }
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// components and props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function MyApp() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Camire" />
      <Welcome name="Jusf" />
    </div>
  );
}

function formatDate(date){ return '';}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <UserInfo user={props.author} />
        <div className="Comment-date">{formatDate(props.date)}</div>
      </div>
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.author.avatarUrl} />
  );
}


const element3 = <Welcome name="Sara" />;
ReactDOM.render(
  // element,
  // element3,
  // <MyApp />,
  // <Clock/>,
  <Toggle/>,
  document.getElementById('root')
);

// function tick() {
//   const element = (
//     <div>
//       <h1>hello world</h1>
//       <h2>it is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
