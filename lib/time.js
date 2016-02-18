var Time = React.createClass({
  getInitialState: function () {
    return { time: new Date() };
  },

  componentDidMount: function () {
    this.interval = setInterval(function () {
      this.setState({ time: new Date() });
    }.bind(this), 500);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  /* jshint ignore:start */
  render: function () {
    return (
      <p>{this.state.time.toUTCString()}</p>
    );
  }
  /* jshint ignore:end */
});

module.exports = Time;
