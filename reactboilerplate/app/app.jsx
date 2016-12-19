var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Brian',
  location: 'Philadelphia',
};

var objTwo = {
  age: '28',
  ...objOne
};

alert(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);