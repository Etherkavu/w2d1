module.exports = function getHTML (Options, callback) {

  var https = require('https');


https.get(Options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  var body = '';
  response.on('data', function (chunk) {
    body += chunk;
  });


  response.on('end', function() {
   callback(body);
  });

});

}