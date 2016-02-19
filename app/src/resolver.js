var superagent = require('superagent');


function get(name, callback) {
  superagent
    .get(window.location.origin + '/components/' + name + '.js')
    .end(function (err, res) {
      'use strict';
      if (err) {
        callback(err);
      } else {
        try {
          var result = Babel.transform(res.text, {
            presets: [ 'react' ]
          });
          var CompType = eval(result.code); // jshint ignore:line
          callback(err, CompType);
        } catch (e) {
          callback(e);
        }
      }
    });
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
