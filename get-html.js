// function that accepts two paramaters, options and print
// Utilizes the https library to GET a given URL
// buffers the data chunks and console logs the full set of data using callback function printHTML
function getHTML(options, print) {

  var https = require('https');

  // console.logs each chunk of data as it is received,
  // concatenated with a newline character ('\n')
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // empty variable for the full data set
    var fullData = "";

    // the callback is invoked when a `data` chunk is received
    // adds data chunks to fullData
    response.on('data', function (data) {
      fullData += (data + "\n");
    });

    // once everything is received, pass the fullData through the printHTML function
    response.on('end', function () {
      print(fullData);
    });

  });

}

// prints the stream
function printHTML(html) {
  console.log(html);
}

// defines a where the stream is coming from
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

console.log(getHTML(requestOptions, printHTML));