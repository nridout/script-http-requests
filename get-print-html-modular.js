// function that accepts a paramater, options
// Utilizes the https library to GET a given URL
// buffers the data chunks and console logs the full set of data

function getAndPrintHTML(options) {

  var fullData = "";

  // console.logs each chunk of data as it is received,
  // concatenated with a newline character ('\n')
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      fullData += (data + "\n");
    });

    response.on('end', function () {
      console.log(fullData);
    });

  });

}

var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};


console.log(getAndPrintHTML(requestOptions));