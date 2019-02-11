var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

// transforms html string into ALL CAPS and prints to the console
function printUpperCase(html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUpperCase);