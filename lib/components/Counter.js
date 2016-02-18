var Counter = React.createClass({
  getInitialState: function () {
    return { value: 0 };
  },

  handleIncClick: function () {
    this.setState({ value: this.state.value + 1 });
  },

  handleDecClick: function () {
    this.setState({ value: this.state.value - 1 });
  },

  /* jshint ignore:start */
  render: function () {
    return (
      <div>
        <button onClick={this.handleDecClick}>Dec</button>
        <span style={{ padding: '0 10px' }}>{this.state.value}</span>
        <button onClick={this.handleIncClick}>Inc</button>
      </div>
    );
  }
  /* jshint ignore:end */
});

module.exports = Counter;
