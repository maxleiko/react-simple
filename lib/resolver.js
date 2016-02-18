var superagent = require('superagent');

var cache = {};

function get(name, callback) {
  if (cache[name]) {
    callback(null, cache[name]);
  } else {
    superagent
      .get(window.location.origin + '/lib/components/' + name + '.js')
      .end(function (err, res) {
        if (err) {
          callback(err);
        } else {
          var module = {
            exports: {}
          };

          try {
            var result = babel(res.text);
            var CompType = eval(result.code); // jshint ignore:line
            cache[name] = CompType;
            callback(err, cache[name]);
          } catch (e) {
            callback(e);
          }
        }
      });
  }
}

function list(callback) {
  superagent
    .get(window.location.origin + '/list')
    .end(function (err, res) {
      if (err) {
        callback(err);
      } else {
        callback(null, JSON.parse(res.text));
      }
    });
}

module.exports.get = get;
module.exports.list = list;
