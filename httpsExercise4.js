function getAndPrintHTMLChunks (Options, callback) {

  var https = require('https');


https.get(Options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  var body = '';
  response.on('data', function (chunk) {
    body += chunk;
  });


  response.on('end', function() {
   printHTML(body);
  });

});

}
function printHTML (html) {
  console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getAndPrintHTMLChunks(requestOptions, printHTML);