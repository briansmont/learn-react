var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter')



var defaultName = 'Name';
var defaultMessage = 'Default Message!';


ReactDOM.render(
  <Greeter name={defaultName} message={defaultMessage}/>,
  document.getElementById('app')
);