var fs = require('fs');
var path = require('path');

var webpackConfig = require('../webpack.config');
var COMPONENTS_DIR = path.resolve(webpackConfig.context, 'components');

module.exports = function () {
  return function(req, res, next) {
    if (req.url === '/list') {
      fs.readdir(COMPONENTS_DIR, function(err, files) {
        if (err) {
          next();
        } else {
          files = files.filter(function(file) {
            return !fs.statSync(path.resolve(COMPONENTS_DIR, file)).isDirectory();
          });

          files = files.map(function(file) {
            return path.basename(file, '.js');
          });

          res.writeHead(200, {
            'Content-Type': 'application/json'
          });
          res.write(JSON.stringify(files));
          res.end();  
        }
      });
    } else {
      next();
    }
  };
};
