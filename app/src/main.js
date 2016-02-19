var React = require('react');
var ReactDOM = require('react-dom');
var Dashboard = require('./dashboard');
var resolver = require('./resolver');

var App = React.createClass({
  getInitialState: function () {
    return { availableComponents: [] };
  },

  componentDidMount: function () {
    this.updateCompTypes();
  },

  updateCompTypes: function () {
    resolver.list(function (err, list) {
      if (err) {
        list = [];
      }
      this.setState({ availableComponents: list });
    }.bind(this));
  },

  /* jshint ignore:start */
  render: function() {
    return (
      <div>
        <h2>React dashboard demo</h2>
        <button className="update-comp-types" onClick={this.updateCompTypes}>Update available types</button>
        <Dashboard componentTypes={this.state.availableComponents} />
      </div>
    )
  }
  /* jshint ignore:end */
});

/* jshint ignore:start  */
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
/* jshint ignore:end */
