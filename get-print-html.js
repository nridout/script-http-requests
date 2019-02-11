// This function should use a buffering technique to append each chunk of data
// to a variable as it is received, and then console.log the data
// once all of the data has been received.


function getAndPrintHTML() {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

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

console.log(getAndPrintHTML());