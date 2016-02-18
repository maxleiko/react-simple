var Dashboard = require('./dashboard');
/* jshint ignore:start */

var availableComponents = ['LikeBtn', 'Counter', 'Time'];

var dashboard = ReactDOM.render(
  <Dashboard componentTypes={availableComponents} />,
  document.getElementById('dashboard')
);
