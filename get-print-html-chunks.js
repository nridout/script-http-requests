// Utilizes the https library to GET a given URL
function getAndPrintHTMLChunks () {

  var https = require('https');

  // domain and path to get data from
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // console.logs each chunk of data as it is received,
  // concatenated with a newline character ('\n')
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log(data.toString() + "\n");
    });

  });

}

console.log(getAndPrintHTMLChunks());