var LikeBtn = require('./like-btn');
var Time = require('./time');
/* jshint ignore:start */

ReactDOM.render(
  <LikeBtn />,
  document.getElementById('like-btn')
);

ReactDOM.render(
  <Time />,
  document.getElementById('time')
);

setTimeout(function () {
  console.log('Unmounting <Time /> ...');
  var res = ReactDOM.unmountComponentAtNode(document.getElementById('time'));
  console.log('Unmount: '+res);
}, 3000);

setTimeout(function () {
  console.log('Mouting <Time /> ...');
  ReactDOM.render(
    <Time />,
    document.getElementById('time')
  );
}, 10000);
