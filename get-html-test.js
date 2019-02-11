var getHTML = require('./http-functions');

// defines a where the stream is coming from
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

// prints the stream
function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);