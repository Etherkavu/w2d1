var getHTML = require('../finalGetHTTPS');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6.html'
};

function printHTML (html) {
  html = html.toUpperCase();
  console.log(html);
}

getHTML(requestOptions, printHTML);
