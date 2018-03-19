function getAndPrintHTMLChunks (Options) {

  var https = require('https');


https.get(Options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  var body = '';
  response.on('data', function (chunk) {
    body += chunk;
  });


  response.on('end', function() {
    console.log('Data Chunk Received:' + body);
  });

});

}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
};

getAndPrintHTMLChunks(requestOptions);