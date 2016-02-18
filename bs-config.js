var fs = require('fs');
var path = require('path');

var COMPONENTS_DIR = path.resolve(__dirname, 'lib', 'components');

module.exports = {
  port: 3000,
  files: [
    "index.html",
    "style/{**,*}/*.css",
    "dist/bundle.js"
  ],
  middleware: [
    function (req, res, next) {
      if (req.url === '/list') {
        fs.readdir(COMPONENTS_DIR, function (err, files) {
          if (err) {
            files = [];
          }

          files = files.filter(function(file) {
            return !fs.statSync(path.resolve(COMPONENTS_DIR, file)).isDirectory();
          });

          files = files.map(function (file) {
            return path.basename(file, '.js');
          });

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(files));
          res.end();
        });
      }
      next();
    }
  ]
};
