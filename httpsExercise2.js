function getAndPrintHTMLChunks () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function (response) {

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

getAndPrintHTMLChunks();