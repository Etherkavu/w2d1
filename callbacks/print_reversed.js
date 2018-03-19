var getHTML = require('../finalGetHTTPS');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6.html'
};

function printHTML (html) {
  html = html.split("").reverse().join("");
  console.log(html);
}

getHTML(requestOptions, printHTML);
