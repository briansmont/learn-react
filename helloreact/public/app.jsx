var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default message!'
    };
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!'}</p>
      </div>
      );
  }
});

var firstName = 'Brian';
var newMessage = 'Today is a day!';


ReactDOM.render(
  <Greeter name={firstName} message={newMessage}/>,
  document.getElementById('app')
);