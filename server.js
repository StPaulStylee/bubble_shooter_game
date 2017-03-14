const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
modernizr.build({options: ['load', 'prefixed'], ["feature-detects"]: ['audio', 'canvas', 'css/transitions']}, function (result) {
  console.log(result); // the build
  console.log('modernizr built');
});

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

const port = process.env.PORT || 8000;
const server = app.listen(port, function() {
  console.log('Listening on port', server.address().port);
});
