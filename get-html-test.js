var getHTML = require('./http-functions');

// prints the stream
function printHTML(html) {
  console.log(html);
}

// defines a where the stream is coming from
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

console.log(getHTML(requestOptions, printHTML));