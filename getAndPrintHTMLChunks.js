var https = require('https');

function getAndPrintHTMLChunks() {

var requestOptions = {
  host: 'sytantris.github.io',
  path: "/http-examples/step1.html"
};

https.get(requestOptions, function(response) {
  // set encoding of recieved data to YTF-8
  response.setEncoding('utf8');

  // callback is invoked when a data chunk is recieved
  response.on('data', function(data) {
    console.log("Chunk recieved. Length:", data.length)
  });

  // callback is invoked when all of the data has been recieved
  // (the end of the stream)
  response.on("end", function() {
    console.log("Response stream complete")
  })

  })
}