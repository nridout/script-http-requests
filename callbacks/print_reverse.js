var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

// transforms html string into ALL CAPS and prints to the console
function printReverse(html) {
  console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, printReverse);