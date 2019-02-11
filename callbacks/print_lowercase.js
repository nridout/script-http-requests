var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

// transforms html string into ALL CAPS and prints to the console
function printLowerCase(html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);