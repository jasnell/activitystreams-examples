var port = (process.env.VCAP_APP_PORT || 3000);
var express = require('express');

var app = express();

app.get(/^(.+)$/, function(req, res) {
  var options = {
    root: __dirname + '/app',
    dotfiles: 'deny',
    headers: {

    }
  };
  var fileName = req.params[0];
  res.sendFile(fileName, options, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent:', fileName);
    }
  });
});
var server = app.listen(port);
