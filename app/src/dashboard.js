require('../style/dashboard.css');

var React = require('react');

var shortid = require('./shortid');
var resolver = require('./resolver');

var Dashboard = React.createClass({
  getDefaultProps: function () {
    return {
      componentTypes: [] // type definitions
    };
  },

  getInitialState: function () {
    return {
      components: {} // instances
    };
  },

  onAddComponent: function (compName) {
    resolver.get(compName, function (err, CompType) {
      if (err) {
        console.error(err);
      } else {
        this.state.components[shortid()] = {
          name: compName,
          type: CompType
        };
        this.setState({ components: this.state.components });
      }
    }.bind(this));
  },

  onRemoveComponent: function (id) {
    delete this.state.components[id];
    this.setState({ components: this.state.components });
  },

  /* jshint ignore:start */
  render: function () {
    return (
      <div>
        <div className="menu">
        <span className="label">Available component types:</span>
        {this.props.componentTypes.map(function (c, i) {
          return (
            <button key={i} onClick={this.onAddComponent.bind(this, c)}>{ c }</button>
          );
        }.bind(this))}
        </div>
        <div className="container">
        {Object.keys(this.state.components).map(function (compId) {
          var comp = this.state.components[compId];
          var Comp = comp.type;
          return (
            <div key={compId} className="component">
              <div className="header">
                <h5>{ 'id: ' + compId + ' - ' + comp.name }</h5>
                <button className="close" onClick={this.onRemoveComponent.bind(this, compId)}>&times;</button>
              </div>
              <div className="content">
                <Comp />
              </div>
            </div>
          );
        }.bind(this))}
        </div>
      </div>
    );
  }
  /* jshint ignore:end */
});

module.exports = Dashboard;
