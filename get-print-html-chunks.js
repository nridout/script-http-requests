// This function should console.log each chunk of data as it is received, concatenated with a newline character('\n') so you can visualize each chunk.
// Remember in this and each subsequent Step - you will always need to invoke(call) the function you wrote.



// Utilizes the https library to GET a given URL
function getAndPrintHTMLChunks () {

  var https = require('https');

  // domain and path to get data from
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

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