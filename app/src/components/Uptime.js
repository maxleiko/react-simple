var Uptime = React.createClass({
  getInitialState: function () {
    return { startDate: new Date().getTime() };
  },

  componentDidMount: function () {
    this.interval = setInterval(function () {
      this.setState({ startDate: this.state.startDate });
    }.bind(this), 10);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  /* jshint ignore:start */
  render: function () {
    var now = new Date().getTime();
    return (
      <p>{ now - this.state.startDate + 'ms' }</p>
    );
  }
  /* jshint ignore:end */
});

module.exports = Uptime;
